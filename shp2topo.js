var fs = require('fs')
var shapefile = require('shapefile')
var topojson = require('topojson-server')

// specify the output file here
const inputFile = './gde-1-1-15.shp'
const outputFile = './src/topo.json'

shapefile
  .open(inputFile)
  .then(source => {
    // start with empty geojson skeleton
    let geojson = {
      type: 'FeatureCollection',
      features: [] // into this array we push our features below
    }
    return source.read().then(function log (result) {
      // when done: pass geojson to next function in promise pipeline
      if (result.done) return geojson

      // if not done: add to geojson feature by feature
      const feature = {
        ...result.value,
        // keep from properties only the bfs id
        properties: {
          bfsId: result.value.properties.BFS_ID
        }
      }
      geojson.features.push(feature)
      // continue with next feature/iteration
      return source.read().then(log)
    })
  })
  // convert to topojson with quantization = 1e3
  .then(geojson => topojson.topology({ municipalities: geojson }, 1e3))
  // write to file
  .then(fileContent =>
    fs.writeFile(outputFile, JSON.stringify(fileContent), () => {
      console.log('The file has been saved!')
    })
  )
  .catch(console.error)

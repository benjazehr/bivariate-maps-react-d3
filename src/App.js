import React from 'react'
import SwissMap from './SwissMap'
import data from './data.json'

function App () {
  return (
    <div>
      <SwissMap data={data} />
    </div>
  )
}

export default App

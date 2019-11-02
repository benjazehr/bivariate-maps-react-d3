import React from 'react'

const MapLegend = ({ bivariateColorScale, leftText = '', rightText = '' }) => (
  <g fill='none' fillRule='evenodd'>
    <path
      fill={bivariateColorScale('high low')}
      fillRule='nonzero'
      d='M81.2 42.1l-8.8-2.5.6-.6 2.5 8.9a.5.5 0 01-1 .2L72 39.3c0-.4.3-.7.6-.6l8.9 2.4a.5.5 0 01-.3 1zm12.3 18.8L77.8 45.2l-5.3-5.3a.5.5 0 01.7-.8l5.3 5.3 15.7 15.7a.5.5 0 01-.7.8z'
    />
    <path
      fill={bivariateColorScale('low high')}
      fillRule='nonzero'
      d='M125.1 42.1l8.9-2.5-.6-.6-2.5 8.9a.5.5 0 101 .2l2.4-8.8a.5.5 0 00-.6-.6L125 41a.5.5 0 10.2 1zM113 60.9l15.7-15.7 5.3-5.3a.5.5 0 10-.8-.8l-5.3 5.3-15.7 15.7a.5.5 0 10.8.8z'
    />
    <g fill={bivariateColorScale('high low')} fontSize='12'>
      {leftText.split('<br />').map((str, i) => (
        <text
          transform='translate(62 14)'
          key={`left-text-${i}`}
          textAnchor='end'
          fontSize={12}
        >
          <tspan x='.4' y={10 + i * 15}>
            {str}
          </tspan>
        </text>
      ))}
    </g>
    <g fill={bivariateColorScale('low high')} fontSize='12'>
      {rightText.split('<br />').map((str, i) => (
        <text
          transform='translate(143 14)'
          key={`right-text-${i}`}
          fontSize={12}
        >
          <tspan x='.4' y={10 + i * 15}>
            {str}
          </tspan>
        </text>
      ))}
    </g>
    <g fillRule='nonzero'>
      <path
        fill={bivariateColorScale('high high')}
        d='M113 9.7L103.4.3l-9.4 9.4 9.4 9.4z'
      />
      <path
        fill={bivariateColorScale('high medium')}
        d='M103.5 19.1l-9.4-9.4-9.4 9.4 9.4 9.5z'
      />
      <path
        fill={bivariateColorScale('high low')}
        d='M94.2 28.6L84.8 19l-9.4 9.5 9.4 9.4z'
      />
      <path
        fill={bivariateColorScale('medium high')}
        d='M122.3 19.1l-9.4-9.4-9.4 9.4 9.4 9.4z'
      />
      <path
        fill={bivariateColorScale('medium medium')}
        d='M113 28.5l-9.5-9.4-9.4 9.4 9.4 9.4z'
      />
      <path
        fill={bivariateColorScale('medium low')}
        d='M103.5 38l-9.4-9.5-9.4 9.4 9.4 9.4z'
      />
      <path
        fill={bivariateColorScale('low high')}
        d='M131.7 28.5l-9.4-9.3-9.4 9.4 9.4 9.3z'
      />
      <path
        fill={bivariateColorScale('low medium')}
        d='M122.3 38l-9.4-9.5-9.4 9.4 9.4 9.4z'
      />
      <path
        fill={bivariateColorScale('low low')}
        d='M112.9 47.3l-9.4-9.4-9.3 9.4 9.4 9.4z'
      />
    </g>
  </g>
)

export default MapLegend

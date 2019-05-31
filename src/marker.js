const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

module.exports = (lng, lat, type) => {
  const markerDomEl = document.createElement('div') // Create a new, detached DIV
  markerDomEl.style.width = '32px'
  markerDomEl.style.height = '39px'

  // Activity: http://i.imgur.com/WbMOfMl.png
  // Hotel: http://i.imgur.com/D9574Cu.png
  // Restaurant: http://i.imgur.com/cqR6pUI.png

  if(type === 'activity') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
  } else if(type === 'hotel') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
  } else if(type === 'restaurant') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
  }

  const marker = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705])

  return marker
}
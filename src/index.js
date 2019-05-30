const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubzdzdXJpYW5vIiwiYSI6ImNqZXEyZGNsejU0amMycm83dDN5NDd0dGkifQ.As2dldVU8t2LPQJqh6NxtQ'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
})

let el = document.createElement('div')
el.className = 'marker'

new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map)

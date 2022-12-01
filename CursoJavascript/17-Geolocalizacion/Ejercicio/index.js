let marker, map;

function initMap() {
  const posicionParis = { 
    lat: 48.85341,
    lng: 2.3488
  }

  mapParis = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: posicionParis,
  })

  markerParis = new google.maps.Marker({
    position: posicionParis,
    map,
    tittle: "Paris"
  })

  // Obtener la geolocalización
  marker.setPosition(posicionParis)


  const posicionMachu = { 
    lat: -72.5001600,
    lng: -13.2014700
  }

  mapMachu = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: posicionMachu,
  })

  markerMachu = new google.maps.Marker({
    position: posicionMachu,
    map,
    tittle: "Machu Picchu"
  })

  // Obtener la geolocalización
  marker.setPosition(posicionMachu)



  const posicionCorea = { 
    lat: 35.907757,
    lng: 127.766922
  }

  mapCorea = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: posicionCorea,
  })

  markerCorea = new google.maps.Marker({
    position: posicionCorea,
    map,
    tittle: "Corea"
  })

  // Obtener la geolocalización
  marker.setPosition(posicionCorea)
}

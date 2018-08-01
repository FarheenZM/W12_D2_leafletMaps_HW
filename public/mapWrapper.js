
const MapWrapper = function(container, coords, zoom){

  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  this.map.on("click", event => this.addPopup(event.latlng));
}

MapWrapper.prototype.addMarker = function(coords){
  L.marker(coords).addTo(this.map).bindPopup("Center " + coords).openPopup();
};

MapWrapper.prototype.addPopup = function(coords){
  L.popup().setLatLng(coords).setContent("You clicked the map at " + coords).openOn(this.map);
}

MapWrapper.prototype.recenterMap = function(coords){
  this.map.flyTo(coords); //panTo goes directly to co-ord, fly has a smoother animation
};

MapWrapper.prototype.addCircle = function(dest, coords){
  L.circle(coords, 500, {
    color: 'red',
    fillOpacity: 0.5
  }).addTo(this.map).bindPopup(dest + " at " + coords);
};

MapWrapper.prototype.locationFound = function(event){
  addMarker(event.latlng);
};

MapWrapper.prototype.locationError = function(event){
  alert(event.message);
};

MapWrapper.prototype.showCurrentLocation = function(){
  this.map.locate({setView: true, maxZoom: 16});
  this.map.on('locationfound', locationFound);
  this.map.on('locationerror', locationError);
};

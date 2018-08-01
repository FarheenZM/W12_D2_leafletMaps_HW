
const app = function(){

  let coords = [0, 0];
  let zoom = 5;
  let containerID = 'main-map';

  mainMap = new MapWrapper(containerID, coords, zoom);

  mainMap.addMarker(coords);

  var buttonChicago = document.querySelector('#bC');
  buttonChicago.addEventListener('click', handleButtonChicagoClick);

  var buttonMumbai = document.querySelector('#bM');
  buttonMumbai.addEventListener('click', handleButtonMumbaiClick);

  var buttonCurrent = document.querySelector('#bCL');
  buttonCurrent.addEventListener('click', handleButtonClick);
}

var handleButtonChicagoClick = function(){
  const chicagoCoords = [41.878114, -87.629798];
  mainMap.recenterMap(chicagoCoords);
  // mainMap.addMarker(chicagoCoords);
  mainMap.addCircle("Chicago", chicagoCoords);
}

var handleButtonMumbaiClick = function(){
  const mumbaiCoords = [19.075984, 72.877656];
  mainMap.recenterMap(mumbaiCoords);
  mainMap.addCircle("Mumbai", mumbaiCoords);
}

var handleButtonClick = function(){
  mainMap.showCurrentLocation();
}

window.addEventListener('DOMContentLoaded', app);

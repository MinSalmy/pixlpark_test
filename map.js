const KEY_API = 'Rz_YYk8mRmf3euh7DOY9Iauiap1Xfwi1TE_fAF-LFjQ';    
const platform = new H.service.Platform({
  apikey: KEY_API
});              

/**
 * Adds SVG marker over
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 * @param  {{lat: number; lng: number;}} centerCoordinates координаты центра карты и маркера
 */
function addSVGMarkers(map, centerCoordinates){
    //Create the svg mark-up
    const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" width="21px" height="32px" fill="#00c8c8" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>';
  
    // Add the first marker
    const icon = new H.map.Icon(svgMarkup),
      marker = new H.map.Marker(centerCoordinates,
        {icon: icon});
  
    map.addObject(marker);
}

/**
 * @param  {string} id Блок, к которому подсоединяется карта
 * @param  {{lat: number; lng: number;}} centerCoordinates координаты центра карты и маркера
 * @param  {string} mapStyle путь json файла со стилем 
 */
function createMap(id, centerCoordinates, mapStyle) {
  /**
   * Boilerplate map initialization code starts below:
   */

  //Step 1: initialize communication with the platform
  // In your own code, replace constiable window.apikey with your own apikey


  const defaultLayers = platform.createDefaultLayers();

  // Step 2: specify engine type. In this example, we use HARP rendering engine, which is capable
  // of rendering vector data using the style configuration exported from the HERE Style Editor.
  // HARP engine is not the default engine, and it's not included in the mapsjs-core.js module.
  // To use this engine, you need to include mapsjs-harp.js file to your HTML page
  const engineType = H.Map.EngineType['HARP'];

  // Step 3: create the style object from the style configuration
  // exported from the HERE Style Editor. The argument is a style path
  const style = new H.map.render.harp.Style(mapStyle);

  // Step 4: create a layer with the style object:
  const vectorLayer = platform.getOMVService().createLayer(style, { engineType });

  // Step 5: initialize a map
  const map = new H.Map(document.getElementById(id),
    vectorLayer, {
    engineType,
    center: centerCoordinates,
    zoom: 17,
    pixelRatio: window.devicePixelRatio || 1
  });
  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());

  //Step 6: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  // Create the default UI components
  const ui = H.ui.UI.createDefault(map, defaultLayers);

  // Now use the map as required...
  addSVGMarkers(map, centerCoordinates);
}
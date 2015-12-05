import ol from 'openlayers';

export default class MouseWheelZoom extends ol.interaction.Interaction {
  constructor(onZoom) {
    const handleEvent = function(...args) {
      return this.onHandleEvent(...args);
    };
    super({
      handleEvent: handleEvent
    });
    this.onZoom = onZoom;
    this.handleEvent = this.handleEvent.bind(this);
  }

  onHandleEvent(mapBrowserEvent) {
    if (mapBrowserEvent.type == "mousewheel") {
      var lastAnchor = mapBrowserEvent.coordinate;
      var mouseWheelEvent = mapBrowserEvent.originalEvent;
      var delta = mouseWheelEvent.deltaY;

      var map = mapBrowserEvent.map;
      var view = map.getView();
      var resolution = view.getResolution();

      var newResolution = resolution + delta;

      this.zoomTo(newResolution);

      mapBrowserEvent.preventDefault();
      return false;
    }
    return true;
  }

  zoomTo(newResolution) {
    this.onZoom(newResolution);
  }
}

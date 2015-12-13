import ol from 'openlayers';

export default class DragPan extends ol.interaction.Pointer {
  constructor(onDrag) {
    const handleDownEvent = function(...args) {
      return this.handleDownEvent(...args);
    };
    const handleDragEvent = function(...args) {
      return this.handleDragEvent(...args);
    };
    const handleUpEvent = function(...args) {
      return this.handleUpEvent(...args);
    };

    super({
      handleDownEvent: handleDownEvent,
      handleDragEvent: handleDragEvent,
      handleUpEvent: handleUpEvent
    });

    this.onDrag = onDrag;
  }

  handleDownEvent(mapBrowserEvent) {
    this.pinnedUnderMouse = mapBrowserEvent.coordinate;
    return true;
  }

  handleDragEvent(mapBrowserEvent) {
    if(this.pinnedUnderMouse) {
      this.dragTo(
        mapBrowserEvent.coordinate,
        mapBrowserEvent.map.getView().getCenter()
      );
    }
  }
    
  handleUpEvent(mapBrowserEvent) {
    if(this.pinnedUnderMouse) {
      this.dragTo(
        mapBrowserEvent.coordinate,
        mapBrowserEvent.map.getView().getCenter()
      );
    }
    delete this.pinnedUnderMouse;
    return true;
  }

  dragTo(newCoordinate, currentCenter) {
    const deltaX = newCoordinate[0] - this.pinnedUnderMouse[0];
    const deltaY = newCoordinate[1] - this.pinnedUnderMouse[1];

    const newCenter = [currentCenter[0] - deltaX, currentCenter[1] - deltaY];

    this.onDrag(newCenter);
  }
}

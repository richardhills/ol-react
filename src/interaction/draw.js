import ol from 'openlayers';

export default class Draw extends ol.interaction.Draw {
  constructor(onDrawEnd) {
    super({
      type: "LineString"
    });
    this.onDrawEnd = onDrawEnd;
    this.on('drawend', this.handleDrawEnd, this);
  }

  handleDrawEnd(drawEvent) {
    this.onDrawEnd(drawEvent.feature);
  }
}

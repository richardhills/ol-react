import React from 'react';
import ol from 'openlayers';
import OLContainer from '../ol-container';

export default class Tile extends OLContainer {
  constructor(props) {
    super(props);
    this.layer = new ol.layer.Tile()
  }

  getChildContext() {
    return {
      layer: this.layer
    }
  }
  
  componentDidMount() {
    this.context.map.addLayer(this.layer);
  }
}

Tile.propTypes = {
}

Tile.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

Tile.childContextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Tile)
}

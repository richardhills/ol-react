import React from 'react';
import ol from 'openlayers';
import OLContainer from '../ol-container';

export default class Vector extends OLContainer {
  constructor(props) {
    super(props);
    this.layer = new ol.layer.Vector({
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: [0, 0, 255, 0.6]
        })
      })
    });
  }

  getChildContext() {
    return {
      layer: this.layer,
      map: this.context.map
    }
  }
  
  componentDidMount() {
    this.context.map.addLayer(this.layer);
  }
}

Vector.propTypes = {
}

Vector.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

Vector.childContextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Vector),
  map: React.PropTypes.instanceOf(ol.Map)
}

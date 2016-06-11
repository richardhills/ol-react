import React from 'react';
import ol from 'openlayers';
import OLContainer from '../ol-container';

export default class Vector extends OLContainer {
  constructor (props) {
    super(props)
    this.layer = new ol.layer.Vector({
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting
    })
  }

  getChildContext () {
    return {
      layer: this.layer,
      map: this.context.map
    }
  }
  
  componentDidMount () {
    this.context.map.addLayer(this.layer)
  }
}

Vector.propTypes = {
  updateWhileAnimating: React.PropTypes.bool,
  updateWhileInteracting: React.PropTypes.bool
}

Vector.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

Vector.childContextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Vector),
  map: React.PropTypes.instanceOf(ol.Map)
}

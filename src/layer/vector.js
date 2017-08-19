import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLLayer from './ol-layer';
import { buildStyle } from '../style';

export default class Vector extends OLLayer {
  constructor(props) {
    super(props)

    let layerProps = this.buildLayerProps(props)

    this.layer = new ol.layer.Vector({
      ...layerProps,
      style: buildStyle(props.style),
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting,
    })
  }

  getChildContext() {
    return {
      layer: this.layer,
      map: this.context.map
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps(newProps) {
    super.componentWillReceiveProps(newProps)
    this.layer.setStyle(buildStyle(newProps.style));
  }

  componentWillUnmount() {
    super.componentWillUnmount()
    this.context.map.removeLayer(this.layer)
  }
}

Vector.propTypes = {
  updateWhileAnimating: PropTypes.bool,
  updateWhileInteracting: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.instanceOf(ol.style.Style),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.instanceOf(ol.style.Style),
      PropTypes.object
    ]))
  ])
}

Vector.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

Vector.childContextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Vector),
  map: PropTypes.instanceOf(ol.Map)
}

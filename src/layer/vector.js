import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLContainer from '../ol-container';
import { buildLayerProps, baseLayerPropTypes } from './'
import { buildStyle } from '../style';

export default class Vector extends OLContainer {
  constructor(props) {
    super(props)

    let layerProps = buildLayerProps(props)

    this.layer = new ol.layer.Vector({
      ...layerProps,
      style: buildStyle(this.props.style),
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
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps(newProps) {
    this.layer.setStyle(buildStyle(newProps.style));
    this.layer.setVisible(newProps.visible)
    this.layer.setZIndex(newProps.zIndex)
  }

  componentWillUnmount() {
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
  ]),
  ...baseLayerPropTypes
}

Vector.defaultProps = {
  visible: true
}

Vector.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

Vector.childContextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Vector),
  map: PropTypes.instanceOf(ol.Map)
}

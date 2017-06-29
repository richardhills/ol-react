import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLContainer from '../ol-container';
import { buildStyle } from '../style';

export default class Vector extends OLContainer {
  constructor(props) {
    super(props)
    this.layer = new ol.layer.Vector({
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting,
      style: buildStyle(this.props.style),
      opacity: props.opacity,
      visible: props.visible,
      extend: props.extent,
      zIndex: props.zIndex,
      minResolution: props.minResolution,
      maxResolution: props.maxResolution,
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
  opacity: PropTypes.number,
  visible: PropTypes.bool,
  extent: PropTypes.instanceOf(ol.Extent),
  zIndex: PropTypes.number,
  minResolution: PropTypes.number,
  maxResolution: PropTypes.number
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

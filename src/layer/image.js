import PropTypes from 'prop-types';
import React from 'react'
import ol from 'openlayers'
import OLContainer from '../ol-container'

export default class Image extends OLContainer {
  constructor(props) {
    super(props)
    this.layer = new ol.layer.Image({
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
      layer: this.layer
    }
  }

  componentDidMount() {
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps(newProps) {
    this.layer.setVisible(newProps.visible)
    this.layer.setZIndex(newProps.zIndex)
  }

  componentWillUnmount() {
    this.context.map.removeLayer(this.layer)
  }
}

Image.propTypes = {
  opacity: PropTypes.number,
  visible: PropTypes.bool,
  extent: PropTypes.instanceOf(ol.Extent),
  zIndex: PropTypes.number,
  minResolution: PropTypes.number,
  maxResolution: PropTypes.number
}

Image.defaultProps = {
  visible: true
}

Image.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

Image.childContextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Image)
}

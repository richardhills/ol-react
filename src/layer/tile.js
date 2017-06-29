import PropTypes from 'prop-types';
import React from 'react'
import ol from 'openlayers'
import OLContainer from '../ol-container'

export default class Tile extends OLContainer {
  constructor(props) {
    super(props)
    this.layer = new ol.layer.Tile({
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

Tile.propTypes = {
  opacity: PropTypes.number,
  visible: PropTypes.bool,
  extent: PropTypes.instanceOf(ol.Extent),
  zIndex: PropTypes.number,
  minResolution: PropTypes.number,
  maxResolution: PropTypes.number
}

Tile.defaultProps = {
  visible: true
}

Tile.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

Tile.childContextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Tile)
}

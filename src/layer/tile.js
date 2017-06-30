import PropTypes from 'prop-types';
import React from 'react'
import ol from 'openlayers'
import OLContainer from '../ol-container'
import { buildLayerProps, baseLayerPropTypes } from './'

export default class Tile extends OLContainer {
  constructor(props) {
    super(props)

    let layerProps = buildLayerProps(props)

    this.layer = new ol.layer.Tile({
      ...layerProps,
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
  ...baseLayerPropTypes
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

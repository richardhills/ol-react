import PropTypes from 'prop-types';
import React from 'react'
import ol from 'openlayers'
import OLContainer from '../ol-container'

export default class Image extends OLContainer {
  constructor (props) {
    super(props)
    this.layer = new ol.layer.Image({
      visible: this.props.visible
    })
    this.layer.setZIndex(props.zIndex)
  }

  getChildContext () {
    return {
      layer: this.layer
    }
  }

  componentDidMount () {
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps (newProps) {
    this.layer.setVisible(newProps.visible)
    this.layer.setZIndex(newProps.zIndex)
  }

  componentWillUnmount () {
    this.context.map.removeLayer(this.layer)
  }
}

Image.propTypes = {
  visible: PropTypes.bool,
  zIndex: PropTypes.number
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

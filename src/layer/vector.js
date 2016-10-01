import React from 'react';
import ol from 'openlayers';
import OLContainer from '../ol-container';

export default class Vector extends OLContainer {
  constructor (props) {
    super(props)
    this.layer = new ol.layer.Vector({
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting,
      style: this.props.style,
      visible: this.props.visible
    })
    this.layer.setZIndex(props.zIndex)
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

  componentWillReceiveProps (newProps) {
    this.layer.setStyle(newProps.style);
    this.layer.setVisible(newProps.visible)
    this.layer.setZIndex(newProps.zIndex)
  }

  componentWillUnmount () {
    this.context.map.removeLayer(this.layer)
  }
}

Vector.propTypes = {
  updateWhileAnimating: React.PropTypes.bool,
  updateWhileInteracting: React.PropTypes.bool,
  style: React.PropTypes.arrayOf(React.PropTypes.instanceOf(ol.style.Style)),
  visible: React.PropTypes.bool,
  zIndex: React.PropTypes.number
}

Vector.defaultProps = {
  visible: true
}

Vector.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

Vector.childContextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Vector),
  map: React.PropTypes.instanceOf(ol.Map)
}

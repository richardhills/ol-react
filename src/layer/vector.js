import React from 'react';
import ol from 'openlayers';
import OLContainer from '../ol-container';

export default class Vector extends OLContainer {
  constructor (props) {
    super(props)
    this.layer = new ol.layer.Vector({
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting,
      visible: this.props.visible
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

  componentWillReceiveProps (newProps) {
    this.layer.setVisible(newProps.visible)
  }
}

Vector.propTypes = {
  updateWhileAnimating: React.PropTypes.bool,
  updateWhileInteracting: React.PropTypes.bool,
  visible: React.PropTypes.bool
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

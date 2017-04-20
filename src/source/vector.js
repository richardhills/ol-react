import PropTypes from 'prop-types';
import React from 'react'
import ol from 'openlayers'
import OLComponent from '../ol-component'
import * as interaction from '../interaction'

export default class Vector extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new ol.source.Vector(
      Object.assign({
        features: new ol.Collection()
      }, this.props)
    )
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillUnmount () {}
}

Vector.propTypes = {
}

Vector.defaultProps = {
}

Vector.contextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Base),
  map: PropTypes.instanceOf(ol.Map)
}

Vector.childContextTypes = {
  source: PropTypes.instanceOf(ol.source.Source)
}

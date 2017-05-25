import React from 'react'
import ol from 'openlayers'
import OLSourceComponent from '../ol-source-component'

export default class XYZ extends OLSourceComponent {
  constructor(props) {
    super(props)
  }

  _createSourceFromProps(props) {
    return new ol.source.XYZ(Object.assign({}, props))
  }
}

XYZ.propTypes = {
  url: React.PropTypes.string
}

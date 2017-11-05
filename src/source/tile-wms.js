import React from 'react'
import ol from 'openlayers'
import OLSourceComponent from '../ol-source-component'

export default class TileWMS extends OLSourceComponent {
  constructor(props) {
    super(props)
  }

  _createSourceFromProps(props) {
    return new ol.source.TileWMS(Object.assign({}, props))
  }
}

TileWMS.propTypes = {
  params: React.PropTypes.object.isRequired,
  url: React.PropTypes.string
}

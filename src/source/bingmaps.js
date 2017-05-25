import React from 'react'
import ol from 'openlayers'
import OLSourceComponent from '../ol-source-component'

export default class BingMaps extends OLSourceComponent {
  constructor(props) {
    super(props)
  }

  _createSourceFromProps(props) {
    let spreadedProps = Object.assign({}, props)
    spreadedProps.key = spreadedProps.apiKey
    delete spreadedProps.apiKey

    return new ol.source.BingMaps(spreadedProps)
  }
}

BingMaps.propTypes = {
  apiKey: React.PropTypes.string.isRequired
}

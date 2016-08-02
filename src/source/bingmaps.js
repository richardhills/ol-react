import React from 'react'
import ol from 'openlayers'
import OLComponent from '../ol-component'

export default class BingMaps extends OLComponent {
  constructor(props) {
    let spreadedProps = Object.assign({}, props)
    spreadedProps.key = spreadedProps.apiKey
    delete spreadedProps.apiKey

    super(props)

    this.source = new ol.source.BingMaps(spreadedProps)
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }
}

BingMaps.propTypes = {
  apiKey: React.PropTypes.string.isRequired
}

BingMaps.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base)
}

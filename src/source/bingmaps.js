import React from 'react'
import ol from 'openlayers'
import OLComponent from '../ol-component'

export default class BingMaps extends OLComponent {
  constructor(props) {
    let spreadedProps = Object.assign({}, props)
    spreadedProps.key = spreadedProps.APIkey
    delete spreadedProps.APIkey
    
    super(props)
    
    this.source = new ol.source.BingMaps(spreadedProps)
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }
}

BingMaps.propTypes = {
}

BingMaps.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base)
}

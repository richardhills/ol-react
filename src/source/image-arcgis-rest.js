import React from 'react'
import ol from 'openlayers'
import OLComponent from '../ol-component'
import * as interaction from '../interaction'

export default class ImageArcGISRest extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new ol.source.ImageArcGISRest(Object.assign({}, this.props))
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillUnmount() {}
}

ImageArcGISRest.propTypes = {
  ratio: React.PropTypes.number,
  url: React.PropTypes.string.isRequired
}

ImageArcGISRest.defaultProps = {
  ratio: 1
}

ImageArcGISRest.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base),
  map: React.PropTypes.instanceOf(ol.Map)
}

ImageArcGISRest.childContextTypes = {
  source: React.PropTypes.instanceOf(ol.source.Source)
}

import React from 'react'
import ol from 'openlayers'
import OLComponent from '../ol-component'

export default class TileWMS extends OLComponent {
  constructor(props) {
    super(props)
    this.source = this._createSourceFromProps(props)
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillReceiveProps(newProps) {
    this.source = this._createSourceFromProps(newProps)
    this.context.layer.setSource(this.source)
  }

  _createSourceFromProps(props) {
    return new ol.source.TileWMS(props)
  }
}

TileWMS.propTypes = {
  params: React.PropTypes.object.isRequired,
  url: React.PropTypes.string
}

TileWMS.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base)
}

TileWMS.childContextTypes = {
  source: React.PropTypes.instanceOf(ol.source.Source)
}

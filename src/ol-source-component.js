import ol from 'openlayers'
import OLComponent from './ol-component'

export default class OLSourceComponent extends OLComponent {
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
    throw new Error("_createSouceFromProps() must be overridden in subclasses")
  }
}

OLSourceComponent.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base),
  map: React.PropTypes.instanceOf(ol.Map)
}

OLSourceComponent.childContextTypes = {
  source: React.PropTypes.instanceOf(ol.source.Source)
}

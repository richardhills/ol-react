import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class XYZ extends OLComponent {
  constructor(props) {
    super(props);
    this.source = new ol.source.XYZ(this.props);
  }

  componentDidMount() {
    this.context.layer.setSource(this.source);
  }
}

XYZ.propTypes = {
  url: React.PropTypes.string,
  urls: React.PropTypes.arrayOf(React.PropTypes.string)
}

XYZ.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base)
}

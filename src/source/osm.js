import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class OSM extends OLComponent {
  constructor(props) {
    super(props);
    this.source = new ol.source.OSM(this.props);
  }

  componentDidMount() {
    this.context.layer.setSource(this.source);
  }
}

OSM.propTypes = {
}

OSM.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base)
}

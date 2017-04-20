import PropTypes from 'prop-types';
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
  url: PropTypes.string,
  urls: PropTypes.arrayOf(PropTypes.string)
}

XYZ.contextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Base)
}

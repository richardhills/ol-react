import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class MapQuest extends OLComponent {
  constructor(props) {
    super(props);
    this.source = new ol.source.MapQuest(this.props);
  }

  componentDidMount() {
    this.context.layer.setSource(this.source);
  }
}

MapQuest.propTypes = {
  layer: PropTypes.string.isRequired
}

MapQuest.contextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Base)
}

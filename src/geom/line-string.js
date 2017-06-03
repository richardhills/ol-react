import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class LineString extends OLComponent {
  constructor(props) {
    super(props);
    this.geometry = new ol.geom.LineString();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.geometry.setCoordinates(props.children);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  render() {
    return false;
  }
}

LineString.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
}

LineString.contextTypes = {
  feature: PropTypes.instanceOf(ol.Feature),
  map: PropTypes.instanceOf(ol.Map),
}

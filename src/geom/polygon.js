import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class Polygon extends OLComponent {
  constructor(props) {
    super(props);
    this.geometry = new ol.geom.Polygon();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.geometry.setCoordinates([props.children]);
  }

  componentDidMount() {
    this.context.feature.setGeometry(this.geometry);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }
  
  render() {
    return false;
  }
}

Polygon.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
}

Polygon.contextTypes = {
  feature: PropTypes.instanceOf(ol.Feature)
}

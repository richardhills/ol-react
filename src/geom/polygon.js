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
    if (this.props.editable) {
      let interactions = this.context.map.getInteractions()
      let polyInteraction = new ol.interaction.Modify({
        features: new ol.Collection([this.context.feature])
      })
      if (this.props.modifyEnd) {
        polyInteraction.on('modifyend', this.props.modifyEnd);
      }
      interactions.push(polyInteraction);
    }
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
  editable: PropTypes.bool,
  modifyEnd: PropTypes.func
}

Polygon.contextTypes = {
  feature: PropTypes.instanceOf(ol.Feature),
  map: PropTypes.instanceOf(ol.Map)
}

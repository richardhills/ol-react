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

  componentDidMount() {
    this.context.feature.setGeometry(this.geometry);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }
}

LineString.propTypes = {
  children: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(React.PropTypes.number)
  ).isRequired,
}

LineString.contextTypes = {
  feature: React.PropTypes.instanceOf(ol.Feature)
}

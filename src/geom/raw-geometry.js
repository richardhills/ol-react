import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class RawGeometry extends OLComponent {
  /*
   * Allows combining a ol.geom.Geometry class with ol-react. Useful if you have
   * retrieved the object from somewhere else, and don't want to convert back
   * into an ol-react component.
   */
  componentDidMount() {
    this.context.feature.setGeometry(this.props.geometry);
  }

  componentWillUnmount() {
    this.context.feature.setGeometry(undefined);
  }
}

RawGeometry.propTypes = {
  geometry: React.PropTypes.instanceOf(
    ol.geom.Geometry
  ).isRequired,
}

RawGeometry.contextTypes = {
  feature: React.PropTypes.instanceOf(ol.Feature)
}

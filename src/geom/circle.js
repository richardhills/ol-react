import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class Circle extends OLComponent {
  constructor(props) {
    super(props);
    this.geometry = new ol.geom.Circle();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    if (props.children.length == 1) {
      // props.children[0] is the center
      this.geometry.setCenterAndRadius(props.children[0], props.radius);
    } else if (props.children.length > 1) {
      // props.children is the center
      this.geometry.setCenterAndRadius(props.children, props.radius);
    } else {
      this.geometry.setCenterAndRadius([0, 0], props.radius);
    }
  }

  componentDidMount() {
    this.context.feature.setGeometry(this.geometry);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  componentWillUnmount() {
    this.context.feature.setGeometry(undefined);
  }
}

Point.propTypes = {
  children: React.PropTypes.arrayOf(PropTypes.number).isRequired,
  radius: React.PropTypes.number.isRequired
}

Point.contextTypes = {
  feature: React.PropTypes.instanceOf(ol.Feature)
}

import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';
import { buildStyle } from './style';

export default class Feature extends OLComponent {
  constructor(props) {
    super(props);
    this.feature = new ol.Feature({});
    this.feature.setId(props.id);
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.feature.setStyle(buildStyle(props.style));
  }

  getChildContext() {
    return {
      feature: this.feature
    }
  }
  
  componentDidMount() {
    this.context.source.addFeature(this.feature);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  componentWillUnmount() {
    this.context.source.removeFeature(this.feature);
  }

  getGeometry() {
    return this.feature.getGeometry();
  }
}

Feature.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element,
  id: PropTypes.any.isRequired
}

Feature.contextTypes = {
  source: PropTypes.instanceOf(ol.source.Source)
}

Feature.childContextTypes = {
  feature: PropTypes.instanceOf(ol.Feature)
}

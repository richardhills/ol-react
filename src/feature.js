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
}

Feature.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.element,
  id: React.PropTypes.any.isRequired
}

Feature.contextTypes = {
  source: React.PropTypes.instanceOf(ol.source.Source)
}

Feature.childContextTypes = {
  feature: React.PropTypes.instanceOf(ol.Feature)
}

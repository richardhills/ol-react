import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class Vector extends OLComponent {
  constructor(props) {
    super(props);
    this.source = new ol.source.Vector(this.props);
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  componentDidMount() {
    this.context.layer.setSource(this.source);
  }
}

Vector.propTypes = {
}

Vector.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base)
}

Vector.childContextTypes = {
  source: React.PropTypes.instanceOf(ol.source.Source)
}

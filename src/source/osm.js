import React from 'react';
import ol from 'openlayers';
import OLSourceComponent from '../ol-source-component'

export default class OSM extends OLSourceComponent {
  constructor(props) {
    super(props);
  }

  _createSourceFromProps(props) {
    return new ol.source.OSM(Object.assign({}, props));
  }
}

OSM.propTypes = {
}

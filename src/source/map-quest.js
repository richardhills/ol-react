import React from 'react';
import ol from 'openlayers';
import OLSourceComponent from '../ol-source-component';

export default class MapQuest extends OLSourceComponent {
  constructor(props) {
    super(props);
  }

  _createSourceFromProps(props) {
    return new ol.source.MapQuest(Object.assign({}, props));
  }
}

MapQuest.propTypes = {
  layer: React.PropTypes.string.isRequired
}

import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class MouseWheelZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.MouseWheelZoom()
  }
}

MouseWheelZoom.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

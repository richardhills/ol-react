import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class DragPan extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DragPan()
  }
}

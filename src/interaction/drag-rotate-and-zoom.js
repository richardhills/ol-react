import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class DragRotateAndZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DragRotateAndZoom({
      condition: props.condition,
      duration: props.duration
    })
  }
}

DragRotateAndZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: React.PropTypes.func,
  duration: React.PropTypes.number
})

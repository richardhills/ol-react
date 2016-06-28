import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class KeyboardZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.KeyboardZoom({
      condition: props.condition,
      delta: props.delta,
      duration: props.duration
    })
  }
}

KeyboardZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: React.PropTypes.func,
  delta: React.PropTypes.number,
  duration: React.PropTypes.number
})

import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class PinchZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.PinchZoom({
      duration: props.duration
    })
  }
}

PinchZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  duration: React.PropTypes.number
})

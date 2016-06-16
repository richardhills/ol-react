import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class PinchRotate extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.PinchRotate({
      treshold: props.treshold,
      duration: props.duration
    })
  }
}

PinchRotate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  treshold: React.PropTypes.number,
  duration: React.PropTypes.number
})

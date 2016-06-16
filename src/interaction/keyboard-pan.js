import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class KeyboardPan extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.KeyboardPan({
      condition: props.condition,
      duration: props.duration,
      pixelDelta: props.pixelDelta
    })
  }
}

KeyboardPan.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: React.PropTypes.func,
  duration: React.PropTypes.number,
  pixelDelta: React.PropTypes.number
})

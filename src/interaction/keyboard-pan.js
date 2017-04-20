import PropTypes from 'prop-types';
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
  condition: PropTypes.func,
  duration: PropTypes.number,
  pixelDelta: PropTypes.number
})

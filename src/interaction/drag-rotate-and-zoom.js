import PropTypes from 'prop-types';
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
  condition: PropTypes.func,
  duration: PropTypes.number
})

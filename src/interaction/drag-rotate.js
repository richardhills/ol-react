import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class DragRotate extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DragRotate({
      condition: props.condition,
      duration: props.duration
    })
  }
}

DragRotate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  duration: PropTypes.number
})

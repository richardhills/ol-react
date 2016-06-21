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
  condition: React.PropTypes.func,
  duration: React.PropTypes.number
})

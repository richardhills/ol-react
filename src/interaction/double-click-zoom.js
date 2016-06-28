import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class DoubleClickZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DoubleClickZoom({
      delta: props.delta,
      duration: props.duration
    })
  }
}

DoubleClickZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  delta: React.PropTypes.number,
  duration: React.PropTypes.number
})

import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class MouseWheelZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.MouseWheelZoom({
      duration: props.duration,
      useAnchor: props.useAnchor
    })
  }
}

MouseWheelZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  duration: React.PropTypes.number,
  useAnchor: React.PropTypes.bool
})

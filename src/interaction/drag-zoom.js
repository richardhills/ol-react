import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class DragZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DragZoom({
      condition: props.condition,
      duration: props.duration,
      out: props.out
    })
  }
}

DragZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  boxdrag: React.PropTypes.func,
  boxend: React.PropTypes.func,
  boxstart: React.PropTypes.func,
  condition: React.PropTypes.func,
  duration: React.PropTypes.number,
  out: React.PropTypes.bool
})

DragZoom.olEvents = ["boxdrag", "boxend", "boxstart"]

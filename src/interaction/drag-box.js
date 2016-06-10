import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class DragBox extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DragBox({
      condition: props.condition
    })
  }
}

DragBox.propTypes = Object.assign({}, OLInteraction.propTypes, {
  boxdrag: React.PropTypes.func,
  boxend: React.PropTypes.func,
  boxstart: React.PropTypes.func,
  condition: React.PropTypes.func
})

DragBox.olEvents = ["boxdrag", "boxend", "boxstart"]

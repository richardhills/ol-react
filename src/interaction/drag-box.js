import PropTypes from 'prop-types';
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
  boxdrag: PropTypes.func,
  boxend: PropTypes.func,
  boxstart: PropTypes.func,
  condition: PropTypes.func
})

DragBox.olEvents = ["boxdrag", "boxend", "boxstart"]

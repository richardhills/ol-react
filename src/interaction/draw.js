import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class Draw extends OLInteraction {
  createInteraction(props) {
    return new ol.interaction.Draw({
      type: props.type,
      maxPoints: props.maxPoints,
      minPoints: props.minPoints
    })
  }
}

Draw.propTypes = Object.assign({}, OLInteraction.propTypes, {
  drawend: PropTypes.func,
  drawstart: PropTypes.func,
  type: PropTypes.string.isRequired,
  maxPoints: PropTypes.number,
  minPoints: PropTypes.number
})

Draw.olEvents = ["drawend", "drawstart"]

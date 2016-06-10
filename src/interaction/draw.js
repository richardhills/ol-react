import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class Draw extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Draw({
      type: props.type
    })
  }
}

Draw.propTypes = Object.assign({}, OLInteraction.propTypes, {
  drawend: React.PropTypes.func,
  drawstart: React.PropTypes.func,
  type: React.PropTypes.string.isRequired
})

Draw.olEvents = ["drawend", "drawstart"]

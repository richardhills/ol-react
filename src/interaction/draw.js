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

Draw.propTypes = {
  drawend: React.PropTypes.func,
  drawstart: React.PropTypes.func,
  type: React.PropTypes.instanceOf(ol.geom.GeometryType).isRequired
}

Draw.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

Draw.olEvents = ["drawend", "drawstart"]

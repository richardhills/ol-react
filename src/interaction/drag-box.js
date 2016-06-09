import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class DragBox extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DragBox()
  }
}

DragBox.propTypes = {
  boxdrag: React.PropTypes.func,
  boxend: React.PropTypes.func,
  boxstart: React.PropTypes.func
}

DragBox.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

DragBox.olEvents = ["boxdrag", "boxend", "boxstart"]

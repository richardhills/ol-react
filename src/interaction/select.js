import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class Select extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Select()
  }
}

Select.propTypes = Object.assign({}, OLInteraction.propTypes, {
  select: React.PropTypes.func
})

Select.olEvents = ["select"]

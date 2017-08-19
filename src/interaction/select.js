import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class Select extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Select({
      condition: props.condition
    })
  }
}

Select.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  select: PropTypes.func
})

Select.olEvents = ["select"]

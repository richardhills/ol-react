import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class Modify extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Modify({
      condition: props.condition,
      features: props.features
    })
  }
}

Modify.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  modifyend: PropTypes.func,
  modifystart: PropTypes.func,
  features: PropTypes.instanceOf(ol.Collection).isRequired
})

Modify.olEvents = ["modifyend", "modifystart"]

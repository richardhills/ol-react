import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class Modify extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Modify({
      features: props.features
    })
  }
}

Modify.propTypes = Object.assign({}, OLInteraction.propTypes, {
  modifyend: React.PropTypes.func,
  modifystart: React.PropTypes.func,
  features: React.PropTypes.instanceOf(ol.Collection).isRequired
})

Modify.olEvents = ["modifyend", "modifystart"]

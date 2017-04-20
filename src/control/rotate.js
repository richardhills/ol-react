import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';

export default class Rotate extends OLControl {
  createControl (props) {
    return new ol.control.Rotate({
      autoHide: props.autoHide,
      className: props.className,
      duration: props.duration,
      label: props.label,
      resetNorth: props.resetNorth,
      tipLabel: props.tipLabel
    })
  }
}

Rotate.propTypes = Object.assign({}, OLControl.propTypes, {
  autoHide: PropTypes.bool,
  className: PropTypes.string,
  duration: PropTypes.number,
  label: PropTypes.node,
  resetNorth: PropTypes.func,
  tipLabel: PropTypes.string
})

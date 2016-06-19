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
  autoHide: React.PropTypes.bool,
  className: React.PropTypes.string,
  duration: React.PropTypes.number,
  label: React.PropTypes.node,
  resetNorth: React.PropTypes.func,
  tipLabel: React.PropTypes.string
})

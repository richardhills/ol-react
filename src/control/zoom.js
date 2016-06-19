import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';

export default class Zoom extends OLControl {
  createControl (props) {
    return new ol.control.Zoom({
      className: props.className,
      delta: props.delta,
      duration: props.duration,
      zoomInLabel: props.zoomInLabel,
      zoomInTipLabel: props.zoomInTipLabel,
      zoomOutLabel: props.zoomOutLabel,
      zoomOutTipLabel: props.zoomOutTipLabel
    })
  }
}

Zoom.propTypes = Object.assign({}, OLControl.propTypes, {
  className: React.PropTypes.string,
  delta: React.PropTypes.number,
  duration: React.PropTypes.number,
  zoomInLabel: React.PropTypes.node,
  zoomInTipLabel: React.PropTypes.string,
  zoomOutLabel: React.PropTypes.node,
  zoomOutTipLabel: React.PropTypes.string
})

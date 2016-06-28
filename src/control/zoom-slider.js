import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';

export default class ZoomSlider extends OLControl {
  createControl (props) {
    return new ol.control.ZoomSlider({
      className: props.className,
      duration: props.duration,
      maxResolution: props.maxResolution,
      minResolution: props.duration
    })
  }
}

ZoomSlider.propTypes = Object.assign({}, OLControl.propTypes, {
  className: React.PropTypes.string,
  duration: React.PropTypes.number,
  maxResolution: React.PropTypes.number,
  minResolution: React.PropTypes.number
})

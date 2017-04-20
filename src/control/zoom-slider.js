import PropTypes from 'prop-types';
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
  className: PropTypes.string,
  duration: PropTypes.number,
  maxResolution: PropTypes.number,
  minResolution: PropTypes.number
})

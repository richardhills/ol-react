import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';
import { ScaleLineUnits } from './scale-line-units'

export default class ScaleLine extends OLControl {
  createControl (props) {
    return new ol.control.ScaleLine({
      className: props.className,
      minWidth: props.minWidth,
      units: props.units
    })
  }
}

ScaleLine.propTypes = Object.assign({}, OLControl.propTypes, {
  className: React.PropTypes.string,
  minWidth: React.PropTypes.number,
  units: React.PropTypes.oneOf(ScaleLineUnits)
})

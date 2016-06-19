import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';

export default class MousePosition extends OLControl {
  createControl (props) {
    return new ol.control.MousePosition({
      className: props.className,
      coordinateFormat: props.coordinateFormat,
      projection: props.projection,
      undefinedHTML: props.undefinedHTML
    })
  }
}

MousePosition.propTypes = Object.assign({}, OLControl.propTypes, {
  className: React.PropTypes.string,
  coordinateFormat: React.PropTypes.instanceOf(ol.CoordinateFormatType),
  projection: React.PropTypes.instanceOf(ol.proj.ProjectionLike),
  undefinedHTML: React.PropTypes.string
})

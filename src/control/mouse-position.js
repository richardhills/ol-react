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
  coordinateFormat: React.PropTypes.func,
  projection: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(ol.proj.Projection),
    React.PropTypes.string
  ]),
  undefinedHTML: React.PropTypes.string
})

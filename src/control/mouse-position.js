import PropTypes from 'prop-types';
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
  className: PropTypes.string,
  coordinateFormat: PropTypes.func,
  projection: PropTypes.oneOfType([
    PropTypes.instanceOf(ol.proj.Projection),
    PropTypes.string
  ]),
  undefinedHTML: PropTypes.string
})

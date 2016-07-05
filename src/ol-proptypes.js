/**
 * @file Property type validators for OpenLayers custom typedefs.
 */

import { PropTypes } from 'react'

let OLPropTypes = {}

/*
 * Custom validator funciton for ol.Extent (an array of four numbers).
 */
OLPropTypes.Extent = function(props, propName, componentName) {
  if (
    PropTypes.arrayOf(PropTypes.number)(props, propName, componentName) instanceof Error ||
    props[propName].length !== 4
  ) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}

export default OLPropTypes

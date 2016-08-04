import React from 'react';
import OLPropTypes from '../ol-proptypes'
import ol from 'openlayers';
import OLControl from './ol-control';

export default class ZoomToExtent extends OLControl {
  createControl (props) {
    return new ol.control.ZoomToExtent({
      className: props.className,
      extent: props.extent,
      label: props.label,
      tipLabel: props.tipLabel
    })
  }
}

ZoomToExtent.propTypes = Object.assign({}, OLControl.propTypes, {
  className: React.PropTypes.string,
  extent: OLPropTypes.Extent,
  label: React.PropTypes.node,
  tipLabel: React.PropTypes.string
})

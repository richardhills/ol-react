import React from 'react';
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
  extent: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.number),
    React.PropTypes.instanceOf(ol.Extent)
    // this is written in the documentation, but ol.Extent does not actually exist
  ]),
  label: React.PropTypes.node,
  tipLabel: React.PropTypes.string
})

import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';

export default class FullScreen extends OLControl {
  createControl (props) {
    return new ol.control.FullScreen({
      className: props.className,
      keys: props.keys,
      label: props.label,
      labelActive: props.labelActive,
      source: props.source,
      tipLabel: props.tipLabel
    })
  }
}

FullScreen.propTypes = Object.assign({}, OLControl.propTypes, {
  className: React.PropTypes.string,
  keys: React.PropTypes.bool,
  label: React.PropTypes.node,
  labelActive: React.PropTypes.node,
  source: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.any
  ]),
  tipLabel: React.PropTypes.string
})

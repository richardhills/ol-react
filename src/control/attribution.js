import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';

export default class Attribution extends OLControl {
  createControl (props) {
    return new ol.control.Attribution({
      className: props.className,
      collapsed: props.collapsed,
      collapseLabel: props.collapseLabel,
      collapsible: props.collapsible,
      label: props.label,
      tipLabel: props.tipLabel
    })
  }
}

Attribution.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapseLabel: PropTypes.string,
  collapsible: PropTypes.bool,
  label: PropTypes.node,
  tipLabel: PropTypes.string
})

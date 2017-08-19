import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLControl from './ol-control';

export default class OverviewMap extends OLControl {
  createControl (props) {
    return new ol.control.OverviewMap({
      className: props.className,
      collapsed: props.collapsed,
      collapseLabel: props.collapseLabel,
      collapsible: props.collapsible,
      label: props.label,
      layers: props.layers,
      tipLabel: props.tipLabel,
      view: props.view
    })
  }
}

OverviewMap.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapseLabel: PropTypes.string,
  collapsible: PropTypes.bool,
  label: PropTypes.node,
  layers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(ol.layer.Layer)),
    PropTypes.instanceOf(ol.Collection)
  ]),
  tipLabel: PropTypes.string,
  view: PropTypes.instanceOf(ol.View)
})

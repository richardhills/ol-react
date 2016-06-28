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
  className: React.PropTypes.string,
  collapsed: React.PropTypes.bool,
  collapseLabel: React.PropTypes.string,
  collapsible: React.PropTypes.bool,
  label: React.PropTypes.node,
  layers: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.instanceOf(ol.layer.Layer)),
    React.PropTypes.instanceOf(ol.Collection)
  ]),
  tipLabel: React.PropTypes.string,
  view: React.PropTypes.instanceOf(ol.View)
})

import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.map = new ol.Map({
      loadTilesWhileAnimating: props.loadTilesWhileAnimating,
      loadTilesWhileInteracting: props.loadTilesWhileInteracting,
      interactions: props.useDefaultInteractions ? ol.interaction.defaults() : [],
      controls: props.useDefaultControls ? ol.control.defaults() : [],
      overlays: []
    })

    if (props.onChangeSize) {
      this.map.on('change:size', this.props.onChangeSize);
    }
    if (this.props.onSingleClick) {
      this.map.on('singleclick', this.props.onSingleClick);
    }
    if (this.props.onFeatureHover) {
      this.map.on('pointermove', this.onFeatureHover, this)
    }
    if (this.props.onFeatureClick) {
      this.map.on('singleclick', this.onFeatureClick, this)
    }
  }

  componentDidMount() {
    this.map.setTarget(this.refs.target)

    if (this.props.focusOnMount) {
      this.focus()
    }
  }

  componentWillUnmount() {
    this.map.setTarget(undefined)
  }

  getChildContext() {
    return {
      map: this.map
    }
  }

  render() {
    return (
      <div style={this.props.style}>
        <div ref="target" style={{ width: '100%', height: '100%' }}>
        </div>
        <div>
          {this.props.children}
          {this.props.view}
        </div>
      </div>
    )
  }

  onFeatureHover(evt) {
    if (evt.dragging) {
      return;
    }
    let pixel = this.map.getEventPixel(evt.originalEvent);
    let feature = this.map.forEachFeatureAtPixel(pixel, function (x) {
      return x
    })
    this.props.onFeatureHover(feature)
  }

  onFeatureClick(evt) {
    let pixel = this.map.getEventPixel(evt.originalEvent);
    let feature = this.map.forEachFeatureAtPixel(pixel, function (x) {
      return x
    })
    let lonLat = ol.proj.toLonLat(evt.coordinate)
    this.props.onFeatureClick(feature, lonLat)
  }

  focus() {
    const viewport = this.map.getViewport()
    viewport.tabIndex = 0
    viewport.focus()
  }

  getSize() {
    return this.map.getSize()
  }
}

Map.propTypes = {
  loadTilesWhileAnimating: PropTypes.bool,
  loadTilesWhileInteracting: PropTypes.bool,
  onSingleClick: PropTypes.func,
  onChangeSize: PropTypes.func,
  onFeatureHover: PropTypes.func,
  onFeatureClick: PropTypes.func,
  view: PropTypes.element.isRequired,
  useDefaultInteractions: PropTypes.bool.isRequired,
  useDefaultControls: PropTypes.bool.isRequired,
  focusOnMount: PropTypes.bool.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ])
}

Map.defaultProps = {
  useDefaultInteractions: true,
  useDefaultControls: true,
  focusOnMount: false
}

Map.childContextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

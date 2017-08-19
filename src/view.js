import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class View extends OLComponent {
  constructor(props) {
    super(props);
    var opts = {
      center: props.initialCenter,
      resolution: props.initialResolution,
      rotation: props.initialRotation,
      zoom: props.initialZoom,
    };
    this.view = new ol.View(opts);
  }

  onMoveEnd(event) {
    if (this.props.onNavigation && this.props.initialCenter[0] !== this.view.getCenter()[0]) {
      // Don't fire an event unless we've actually moved from initial location
      this.props.onNavigation(
        this.view.getCenter(),
        this.view.getResolution(),
        this.view.getZoom(),
        this.view.getRotation()
      );
    }
  }

  updateFromProps_(nextProps) {
    if (typeof nextProps.center !== 'undefined') {
      this.view.setCenter(nextProps.center);
    }
    if (typeof nextProps.rotation !== 'undefined') {
      this.view.setRotation(nextProps.rotation);
    }
    // Set either Resolution OR zoom, but guard against 0 (will cause map to not render)
    if (typeof nextProps.resolution !== 'undefined' && nextProps.resolution !== 0) {
      this.view.setResolution(nextProps.resolution);
    } else if (typeof nextProps.zoom !== 'undefined') {
      this.view.setZoom(nextProps.zoom);
    }
  }

  componentDidMount() {
    this.context.map.setView(this.view);
    this.updateFromProps_(this.props);

    this.context.map.on("moveend", this.onMoveEnd, this);
  }

  componentWillReceiveProps(props) {
    this.updateFromProps_(props);
  }

  animate(options) {
    this.view.animate(options);
  }

  fit(geometry, size, options) {
    this.view.fit(geometry, size, options);
  }
}

View.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  resolution: PropTypes.number,
  zoom: PropTypes.number,
  rotation: PropTypes.number,
  initialCenter: PropTypes.arrayOf(PropTypes.number),
  initialResolution: PropTypes.number,
  initialZoom: PropTypes.number,
  initialRotation: PropTypes.number,
  onResolutionChanged: PropTypes.func,
  onZoomChanged: PropTypes.func,
  onCenterChanged: PropTypes.func,
}

View.defaultProps = {
  initialCenter: [0, 0],
  initialResolution: 10000,
  initialZoom: 0,
  initialRotation: 0
}

View.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

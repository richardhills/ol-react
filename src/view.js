import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class View extends OLComponent {
  constructor(props) {
    super(props);
    var opts = {
      center: props.initialCenter,
      resolution: props.initialResolution,
      zoom: props.initialZoom,
      rotation: props.initialRotation
    };
    this.view = new ol.View(opts);
  }

  onMoveEnd(event) {
    if (this.props.onNavigation) {
      this.props.onNavigation({
        center: this.view.getCenter(),
        resolution: this.view.getResolution(),
        zoom: this.view.getZoom(),
        rotation: this.view.getRotation()
      });
    }
  }

  updateFromProps_(nextProps) {
    if (typeof nextProps.center !== 'undefined') {
      this.view.setCenter(nextProps.center);
    }
    if (typeof nextProps.rotation !== 'undefined') {
      this.view.setRotation(nextProps.rotation);
    }

    if (typeof nextProps.resolution !== 'undefined') {
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

  fit(geometry, options) {
    this.view.fit(geometry, options);
  }
}

View.propTypes = {
  center: React.PropTypes.arrayOf(React.PropTypes.number),
  resolution: React.PropTypes.number,
  zoom: React.PropTypes.number,
  rotation: React.PropTypes.number,
  initialCenter: React.PropTypes.arrayOf(React.PropTypes.number),
  initialResolution: React.PropTypes.number,
  initialZoom: React.PropTypes.number,
  initialRotation: React.PropTypes.number,
  onResolutionChanged: React.PropTypes.func,
  onZoomChanged: React.PropTypes.func,
  onCenterChanged: React.PropTypes.func,
}

View.defaultProps = {
  initialCenter: [0, 0],
  initialResolution: 10000,
  initialZoom: 10,
  initialRotation: 0
}

View.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

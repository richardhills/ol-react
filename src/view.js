import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class View extends OLComponent {
  constructor(props) {
    super(props);
    this.view = new ol.View();
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

  updateFromProps_(props) {
    if (typeof props.center !== 'undefined') {
      this.view.setCenter(props.center);
    }
    if (typeof props.rotation !== 'undefined') {
      this.view.setRotation(props.rotation);
    }

    if (typeof props.resolution !== 'undefined') {
      this.view.setResolution(props.resolution);
    } else if (typeof props.zoom !== 'undefined') {
      this.view.setZoom(props.zoom);
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
}

View.propTypes = {
  center: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  resolution: React.PropTypes.number,
  zoom: React.PropTypes.number,
  onResolutionChanged: React.PropTypes.func,
  onZoomChanged: React.PropTypes.func,
  onCenterChanged: React.PropTypes.func
}

View.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

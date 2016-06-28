import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class View extends OLComponent {
  constructor(props) {
    super(props);
    this.view = new ol.View();
    //this.view.on("change:center", this.onCenterChanged, this);
    //this.view.on("change:resolution", this.onResolutionChanged, this);
  }

  onCenterChanged (event) {
    this.props.onNavigation({
      center: this.view.getCenter()
    })
  }

  onResolutionChanged (event) {
    this.props.onNavigation({
      resolution: this.view.getResolution()
    })
    return true
  }

  updateCenterAndResolutionFromProps_ (props) {
    this.view.setCenter(props.center);
    if (typeof props.resolution !== 'undefined') {
      this.view.setResolution(props.resolution);
    } else if (typeof props.zoom !== 'undefined') {
      this.view.setZoom(props.zoom);
    }
  }

  updateFromProps_ (props, isMounting) {
    if (isMounting) {
      // Update the center and the resolution of the view only when it is
      // mounted the first time but not when the properties are updated
      this.updateCenterAndResolutionFromProps_(props)
    }
  }

  componentDidMount () {
    this.context.map.setView(this.view)
    this.updateFromProps_(this.props, /* isMounting = */ true)
  }

  componentWillReceiveProps (newProps) {
    this.updateFromProps_(newProps);
  }
}

View.propTypes = {
	center: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
	resolution: React.PropTypes.number,
	zoom: React.PropTypes.number,
	onNavigation: React.PropTypes.func
}

View.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

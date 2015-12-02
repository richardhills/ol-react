import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class MapQuest extends OLComponent {
	constructor(props) {
	  super(props);
		this.source = new ol.source.MapQuest(this.props);
  }

	componentDidMount() {
	  this.context.layer.setSource(this.source);
	}
}

MapQuest.propTypes = {
	layer: React.PropTypes.string.isRequired
}

MapQuest.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base)
}

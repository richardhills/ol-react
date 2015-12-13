import React from 'react';
import {findDOMNode} from 'react-dom';
import ol from 'openlayers';
import OLComponent from './ol-component';
import * as interaction from './interaction';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = new ol.Map({
      interactions: [
        new interaction.DragPan(this.onDrag.bind(this)),
        new interaction.MouseWheelZoom(this.onZoom.bind(this)),
        new interaction.Draw(this.onDrawEnd.bind(this))
      ]
    });
  }

  onDrag(newCenter) {
    this.props.actions.onNavigation({
      center: newCenter
    });
  }

  onZoom(newResolution) {
    this.props.actions.onNavigation({
      resolution: newResolution
    });
  }

  onDrawEnd(newFeature) {
    this.props.actions.onNewFeature(newFeature);
  }

  componentDidMount() {
    this.map.setTarget(this.refs.target);
  }

  getChildContext() {
    return {
      map: this.map
    };
  }

  render() {
    return (
      <div>
        <div ref="target">
        </div>
        <div>
          {this.props.children}
          {this.props.view}
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  view: React.PropTypes.element.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  actions: React.PropTypes.object.isRequired
}

Map.childContextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

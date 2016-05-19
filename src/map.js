import React from 'react';
import {findDOMNode} from 'react-dom';
import ol from 'openlayers';
import OLComponent from './ol-component';
import * as interaction from './interaction';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = new ol.Map({})
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
  ])
}

Map.defaultProps = {
  actions: {}
}

Map.childContextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

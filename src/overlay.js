import React from 'react';
import ReactDOM from 'react-dom'
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class Overlay extends OLComponent {
  constructor(props) {
    super(props);
    this.overlay = new ol.Overlay({
      id: props.id,
      offset: props.offset,
      position: props.position,
      positioning: props.positioning,
      stopEvent: props.stopEvent,
      insertFirst: props.insertFirst
    });
  }


  updateFromProps_(props) {

    if (typeof props.element !== 'undefined') {
      if (typeof this.element !== 'undefined') {
        this.element.remove();
      }
      this.element = document.createElement("div");
      ReactDOM.render(props.element, this.element);
      this.overlay.setElement(this.element);
    }
    if (typeof props.offset !== 'undefined') {
      this.overlay.setOffset(props.offset);
    }
    if (typeof props.position !== 'undefined') {
      this.overlay.setPosition(props.position);
    }
    if (typeof props.positioning !== 'undefined') {
      this.overlay.setPositioning(props.positioning);
    }
  }

  componentDidMount() {
    this.context.map.addOverlay(this.overlay);
    this.updateFromProps_(this.props);
  }

  componentWillReceiveProps(props) {
    this.updateFromProps_(props);
  }
}

Overlay.propTypes = {
  id: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  element: React.PropTypes.element,
  offset: React.PropTypes.arrayOf(React.PropTypes.number),
  position: React.PropTypes.arrayOf(React.PropTypes.number),
  positioning: React.PropTypes.string,
  stopEvent: React.PropTypes.bool,
  insertFirst: React.PropTypes.bool
}

Overlay.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

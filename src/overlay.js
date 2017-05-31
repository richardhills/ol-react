import PropTypes from 'prop-types';
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

  shouldComponentUpdate(nextProps, nextState) {
    return this.props != nextProps
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
      if (props.animate) {
        this.animate(props.position, props.animationLength)
      } else {
        this.overlay.setPosition(props.position);
      }
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

  animate(finishCoords, animationLength) {
    let frame = animationLength * 1000;
    let startCoords = this.overlay.getPosition();
    let delta = [finishCoords[0] - startCoords[0], finishCoords[1] - startCoords[1]];

    let finish = null;
    let step = (timestamp) => {
      if (!finish) {
        finish = timestamp + frame;
      }
      if (timestamp < finish) {
        let progress = 1 - ((finish - timestamp) / frame);
        this.overlay.setPosition([startCoords[0] + (delta[0] * progress), startCoords[1] + (delta[1] * progress)]);
        window.requestAnimationFrame(step);
      } else {
        this.overlay.setPosition(finishCoords);
      }
    }
    window.requestAnimationFrame(step);
  }
}

Overlay.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  element: PropTypes.element,
  offset: PropTypes.arrayOf(PropTypes.number),
  position: PropTypes.arrayOf(PropTypes.number),
  positioning: PropTypes.string,
  stopEvent: PropTypes.bool,
  insertFirst: PropTypes.bool,
  animate: PropTypes.bool,
  animationLength: PropTypes.number
}

Overlay.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

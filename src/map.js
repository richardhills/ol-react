import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class Map extends React.Component {
  constructor (props) {
    super(props)
    this.map = new ol.Map({
      loadTilesWhileAnimating: props.loadTilesWhileAnimating,
      loadTilesWhileInteracting: props.loadTilesWhileInteracting,
      interactions: props.useDefaultInteractions ? ol.interaction.defaults() : [],
      controls: props.useDefaultControls ? ol.control.defaults() : []
    })

    if (props.onChangeSize) {
      this.map.on('change:size', props.onChangeSize);
    }
    if (this.props.onSingleClick) {
      this.map.on('singleclick', this.props.onSingleClick);
    }
  }

  componentDidMount () {
    this.map.setTarget(this.refs.target)

    if (this.props.focusOnMount) {
      this.focus()
    }
  }

  componentWillUnmount () {
    this.map.setTarget(undefined)
  }

  getChildContext () {
    return {
      map: this.map
    }
  }

  render () {
    return (
      <div style={this.props.style}>
        <div ref="target">
        </div>
        <div>
          {this.props.children}
          {this.props.view}
        </div>
      </div>
    )
  }

  focus () {
    const viewport = this.map.getViewport()
    viewport.tabIndex = 0
    viewport.focus()
  }
}

Map.propTypes = {
  loadTilesWhileAnimating: React.PropTypes.bool,
  loadTilesWhileInteracting: React.PropTypes.bool,
  onSingleClick: React.PropTypes.func,
  onChangeSize: React.PropTypes.func,
  view: React.PropTypes.element.isRequired,
  useDefaultInteractions: React.PropTypes.bool.isRequired,
  useDefaultControls: React.PropTypes.bool.isRequired,
  focusOnMount: React.PropTypes.bool.isRequired,

  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ])
}

Map.defaultProps = {
  useDefaultInteractions: true,
  useDefaultControls: true,
  focusOnMount: false
}

Map.childContextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

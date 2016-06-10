import React from 'react';
import ol from 'openlayers';
import OLComponent from './ol-component';

export default class Map extends React.Component {
  constructor (props) {
    super(props)
    this.map = new ol.Map({
      loadTilesWhileAnimating: props.loadTilesWhileAnimating,
      loadTilesWhileInteracting: props.loadTilesWhileInteracting,
      interactions: props.useDefaultInteractions ? ol.interaction.defaults() : []
    })
  }

  componentDidMount () {
    this.map.setTarget(this.refs.target)
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
      <div>
        <div ref="target">
        </div>
        <div>
          {this.props.children}
          {this.props.view}
        </div>
      </div>
    )
  }
}

Map.propTypes = {
  loadTilesWhileAnimating: React.PropTypes.bool,
  loadTilesWhileInteracting: React.PropTypes.bool,
  view: React.PropTypes.element.isRequired,
  useDefaultInteractions: React.PropTypes.bool.isRequired,

  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ])
}

Map.defaultProps = {
  useDefaultInteractions: true
}

Map.childContextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

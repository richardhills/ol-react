import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class OLInteraction extends OLComponent {
  constructor (props) {
    super(props);
    this.interaction = this.createInteraction(props)
    this.eventHandlerKeys_ = {}
  }

  componentDidMount () {
    this.updateActiveState_(this.props)
    this.updateEventHandlersFromProps_(this.props)
    this.context.map.addInteraction(this.interaction)
  }

  componentWillReceiveProps (newProps) {
    this.updateActiveState_(newProps)
    this.updateEventHandlersFromProps_(newProps, this.props)
  }

  componentWillUnmount () {
    this.context.map.removeInteraction(this.interaction)
    this.updateEventHandlersFromProps_({})
  }

  createInteraction (props) {
    throw new TypeError('You must override createInteraction() in classes derived ' +
                        'from OLInteraction')
  }

  updateActiveState_ (props) {
    if (props.hasOwnProperty("active")) {
      this.interaction.setActive(props.active)
    } else {
      this.interaction.setActive(true)
    }
  }

  updateEventHandler_ (name, handler) {
    const key = this.eventHandlerKeys_[name]
    if (key) {
      this.interaction.unByKey(key)
      delete this.eventHandlerKeys_[name]
    }
    if (handler) {
      this.eventHandlerKeys_[name] = this.interaction.on(name, handler)
    }
  }

  updateEventHandlersFromProps_ (props, oldProps) {
    const events = this.constructor.olEvents || []
    for (let prop of events) {
      const handler = props[prop]
      const oldHandler = oldProps ? oldProps[prop] : undefined
      if (oldHandler !== handler) {
        this.updateEventHandler_(prop, handler)
      }
    }
  }
}

OLInteraction.propTypes = {
  active: React.PropTypes.bool.isRequired
}

OLInteraction.defaultProps = {
  active: true
}

OLInteraction.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

import OLComponent from '../ol-component';

export default class OLInteraction extends OLComponent {
  constructor (props) {
    super(props);
    this.interaction = this.createInteraction(props)
    this.eventHandlerKeys_ = {}
  }

  componentDidMount () {
    this.context.map.addInteraction(this.interaction)
    this.updateEventHandlersFromProps_(this.props)
  }

  componentWillReceiveProps (newProps) {
    this.updateEventHandlersFromProps_(newProps, this.props)
  }

  componentWillUnmount () {
    this.updateEventHandlersFromProps_({})
    this.context.map.removeInteraction(this.interaction)
  }

  createInteraction (props) {
    throw new TypeError('You must override createInteraction() in classes derived ' +
                        'from OLInteraction')
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

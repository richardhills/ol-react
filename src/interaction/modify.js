import ol from 'openlayers';

export default class Modify extends ol.interaction.Modify {
  constructor(options) {
    super(options);
    this.on('modifyend', this.handleModifyEnd, this);
    this.onModifyEnd = options.onModifyEnd;
  }

  handleModifyEnd(modifyEvent) {
    this.onModifyEnd(modifyEvent);    
  }
}

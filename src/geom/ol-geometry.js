import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class OLGeometry extends OLComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.context.feature.setGeometry(this.geometry);
        if (this.props.modify) {
            let interactions = this.context.map.getInteractions()
            this.interaction = new ol.interaction.Modify({
                features: new ol.Collection([this.context.feature]),
                //insertVertexCondition: this.props.insertVertexCondition 
                // Note; as of 27/06/2017, insertVertexCondition is in 4.2.0 of OpenLayers, we can't upgrade yet as the @types package hasn't been updated
            })
            if (this.props.modifyStart) {
                this.interaction.on('modifystart', this.props.modifyStart)
            }
            if (this.props.modifyEnd) {
                this.interaction.on('modifyend', this.props.modifyEnd);
            }
            interactions.push(this.interaction);
        }
    }

    componentWillUnmount() {
        if (this.props.modify && this.interaction) {
            let interactions = this.context.map.getInteractions()
            if (this.props.modifyStart) {
                this.interaction.un('modifystart', this.props.modifyStart)
            }
            if (this.props.modifyEnd) {
                this.interaction.un('modifyend', this.props.modifyEnd);
            }
            interactions.remove(this.interaction);
        }
    }
}

OLGeometry.propTypes = {
    modify: PropTypes.bool,
    modifyStart: PropTypes.func,
    modifyEnd: PropTypes.func,
    insertVertexCondition: PropTypes.func
}

OLGeometry.contextTypes = {
    feature: PropTypes.instanceOf(ol.Feature),
    map: PropTypes.instanceOf(ol.Map),
}

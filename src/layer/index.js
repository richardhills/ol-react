import PropTypes from 'prop-types';

export { default as Vector } from './vector';
export { default as Tile } from './tile';
export { default as Image } from './image';

export function buildLayerProps(props) {
    return {
        opacity: props.opacity,
        visible: props.visible,
        extent: props.extent,
        zIndex: props.zIndex,
        minResolution: props.minResolution,
        maxResolution: props.maxResolution,
    }
}

export const baseLayerPropTypes = {
    opacity: PropTypes.number,
    visible: PropTypes.bool,
    extent: PropTypes.instanceOf(ol.Extent),
    zIndex: PropTypes.number,
    minResolution: PropTypes.number,
    maxResolution: PropTypes.number
}
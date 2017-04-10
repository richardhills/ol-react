// Type definitions for ol-react 0.1.5
// Project: https://github.com/richardhills/ol-react
// Definitions by: Jono Rogers (https://github.com/jonorogers), Status Awareness Systems (http://statusas.com)

/// <reference types="react" />
/// <reference types="openlayers" />

declare module "ol-react" {
    export import control = __OLReact.control;
    export import geom = __OLReact.geom;
    export import interaction = __OLReact.interaction;
    export import layer = __OLReact.layer;
    export import source = __OLReact.source;

    export import Feature = __OLReact.Feature;
    export import Map = __OLReact.Map;
    export import View = __OLReact.View;
    export import Overlay = __OLReact.Overlay;
}

declare namespace __OLReact {
    export class OLComponent<P, S> extends React.Component<P, S> {
    }

    export class OLContainer<P, S> extends OLComponent<P, S> {
    }

    interface FeatureProps {
        style?: Object;
        children?: JSX.Element;
        id: any;
    }

    export class Feature extends OLComponent<FeatureProps, any> {
        getGeometry(): ol.geom.Geometry;

        feature: ol.Feature;
    }

    interface MapProps {
        loadTilesWhileAnimating?: boolean;
        loadTilesWhileInteracting?: boolean;
        onSingleClick?: Function;
        onChangeSize?: Function;
        view: JSX.Element;
        useDefaultInteractions?: boolean;
        useDefaultControls?: boolean;
        focusOnMount?: boolean;
        children?: JSX.Element | JSX.Element[];
        style?: React.CSSProperties;
    }

    export class Map extends React.Component<MapProps, any> {
        focus(): void;
        getSize(): ol.Size;
    }

    interface ViewProps {
        center?: number[];
        resolution?: number;
        zoom?: number;
        rotation?: number;
        initialCenter?: number[];
        initialResolution?: number;
        initialZoom?: number;
        initialRotation?: number;
        onNavigation?: Function;
    }

    export class View extends OLComponent<ViewProps, any> {
        animate(options: any);
        fit(geometry: ol.geom.Geometry | ol.Extent, size: ol.Size, options?: Object): void;
    }

    interface OverlayProps {
        id: number | string;
        element?: JSX.Element;
        offset?: number[];
        position?: number[];
        positioning?: string;
        stopEvent?: boolean;
        insertFirst?: boolean;
    }

    export class Overlay extends OLComponent<OverlayProps, any> {
    }

    namespace OLProps {
        export function Extent();
    }

    export namespace control {
        type ScaleLineUnits = "degrees" | "imperial" | "nautical" | "metric" | "us";

        interface OLControlProps {
        }
        export class OLControl<P, S> extends OLComponent<P, S> {
        }

        interface AttributionProps extends OLControlProps {
            className?: string;
            collapsed?: boolean;
            collapseLabel?: string;
            collapsible?: boolean;
            label?: React.ReactNode;
            tipLabel?: string;

        }
        export class Attribution extends OLControl<AttributionProps, any> {
        }

        interface FullScreenProps {
            className?: string;
            keys?: boolean;
            label?: React.ReactNode;
            labelActive?: React.ReactNode;
            source?: React.ReactNode | any;
            tipLabel?: string;

        }
        export class FullScreen extends OLControl<FullScreenProps, any> {
        }

        interface MousePositionProps {
            className?: string;
            coordinateFormat?: Function;
            projection?: ol.proj.Projection | string;
            undefinedHTML?: string;
        }
        export class MousePosition extends OLControl<MousePositionProps, any> {
        }

        interface OverviewMapProps {
            className?: string;
            collapsed?: boolean;
            collapseLabel?: string;
            collapsible?: boolean;
            label?: React.ReactNode;
            layers?: ol.layer.Layer[] | ol.Collection<ol.layer.Layer>;
            tipLabel?: string;
            view?: ol.View;
        }
        export class OverviewMap extends OLControl<OverviewMapProps, any> {
        }

        interface RotateProps {
            autoHide?: boolean;
            className?: string;
            duration?: number;
            label?: React.ReactNode;
            resetNorth?: Function;
            tipLabel?: string;
        }
        export class Rotate extends OLControl<RotateProps, any> {
        }

        interface ScaleLineProps {
            className?: string;
            minWidth?: number;
            units?: ScaleLineUnits
        }
        export class ScaleLine extends OLControl<ScaleLineProps, any> {
        }

        interface ZoomProps {
            className?: string;
            delta?: number;
            duration?: number;
            zoomInLabel?: React.ReactNode;
            zoomInTipLabel?: string;
            zoomOutLabel?: React.ReactNode;
            zoomOutTipLabel?: string;
        }
        export class Zoom extends OLControl<ZoomProps, any> {
        }

        interface ZoomSliderProps {
            className?: string;
            duration?: number;
            maxResolution?: number;
            minResolution?: number;
        }
        export class ZoomSlider extends OLControl<ZoomSliderProps, any> {
        }

        interface ZoomToExtentProps {
            className?: string;
            extent?: ol.Extent,
            label?: React.ReactNode;
            tipLabel?: string;
        }
        export class ZoomToExtent extends OLControl<ZoomToExtentProps, any> {
        }
    }

    export namespace geom {
        interface LineStringProps {
            children?: number[][];
        }
        export class LineString extends OLComponent<LineStringProps, any> {
        }

        interface PolygonProps {
            children?: number[][];
        }
        export class Polygon extends OLComponent<PolygonProps, any> {
        }

        interface RawGeometryProps {
            geometry: ol.geom.Geometry;
        }
        export class RawGeometry extends OLComponent<RawGeometryProps, any> {
        }

        interface PointProps {
            children?: number[];
        }
        export class Point extends OLComponent<PointProps, any> {
        }
    }

    export namespace interaction {

        interface OLInteractionProps {
            active?: boolean;
        }
        export class OLInteraction<P, S> extends OLComponent<P, S> { }

        interface DoubleClickZoomProps extends OLInteractionProps {
            delta?: number;
            duration?: number;
        }
        export class DoubleClickZoom extends OLInteraction<DoubleClickZoomProps, any> { }

        interface DragBoxProps extends OLInteractionProps {
            boxdrag?: Function;
            boxend?: Function;
            boxstart?: Function;
            condition?: Function;
        }
        export class DragBox extends OLInteraction<DragBoxProps, any> { }

        interface DragPanProps extends OLInteractionProps {
        }
        export class DragPan extends OLInteraction<DragPanProps, any> { }

        interface DragRotateProps extends OLInteractionProps {
            condition?: Function;
            duration?: number;
        }
        export class DragRotate extends OLInteraction<DragRotateProps, any> { }

        interface DragRotateAndZoomProps extends OLInteractionProps {
            condition?: Function,
            duration?: number;
        }
        export class DragRotateAndZoom extends OLInteraction<DragRotateAndZoomProps, any> { }

        interface DragZoomProps extends OLInteractionProps {
            boxdrag?: Function;
            boxend?: Function;
            boxstart?: Function;
            condition?: Function;
            duration?: number;
            out?: boolean;
        }
        export class DragZoom extends OLInteraction<DragZoomProps, any> { }

        interface DrawProps extends OLInteractionProps {
            drawend?: Function;
            drawstart?: Function;
            type: string;
        }
        export class Draw extends OLInteraction<DrawProps, any> { }

        interface KeyboardPanProps extends OLInteractionProps {
            condition?: Function;
            duration?: number;
            pixelDelta?: number;
        }
        export class KeyboardPan extends OLInteraction<KeyboardPanProps, any> { }

        interface KeyboardZoomProps extends OLInteractionProps {
            condition?: Function;
            delta?: number;
            duration?: number;
        }
        export class KeyboardZoom extends OLInteraction<KeyboardZoomProps, any> { }

        interface ModifyProps extends OLInteractionProps {
            condition?: Function;
            modifyend?: Function;
            modifystart?: Function;
            features: ol.Collection<ol.Feature>;
        }
        export class Modify extends OLInteraction<ModifyProps, any> { }

        interface MouseWheelZoomProps extends OLInteractionProps {
            duration?: number;
            useAnchor?: boolean;
        }
        export class MouseWheelZoom extends OLInteraction<MouseWheelZoomProps, any> { }

        interface PinchRotateProps extends OLInteractionProps {
            threshold?: number;
            duration?: number;
        }
        export class PinchRotate extends OLInteraction<PinchRotateProps, any> { }

        interface PinchZoomProps extends OLInteractionProps {
            duration?: number;
        }
        export class PinchZoom extends OLInteraction<PinchZoomProps, any> { }

        interface SelectProps extends OLInteractionProps {
            condition?: Function;
            select?: Function;
        }
        export class Select extends OLInteraction<SelectProps, any> { }
    }

    export namespace layer {
        interface ImageProps {
            visible?: boolean;
            zIndex?: number;
        }
        export class Image extends OLContainer<ImageProps, any> {
        }

        interface TileProps {
            visible?: boolean;
            zIndex?: number;
        }
        export class Tile extends OLContainer<TileProps, any> {
        }

        interface VectorProps {
            updateWhileAnimating?: boolean;
            updateWhileInteracting?: boolean;
            style?: ol.style.Style | Object | ol.style.Style[] | Object[];
            visible?: boolean;
            zIndex?: number;
        }
        export class Vector extends OLContainer<VectorProps, any> {
        }
    }

    export namespace source {
        interface BingMapsProps {
            apiKey: string;
            imagerySet: string;
        }
        export class BingMaps extends OLComponent<BingMapsProps, any> {
        }

        interface ImageArcGISRestProps {
            ratio?: number;
            url: string;
        }
        export class ImageArcGISRest extends OLComponent<ImageArcGISRestProps, any> {
        }

        interface MapQuestProps {
            layer: string;
        }
        export class MapQuest extends OLComponent<MapQuestProps, any> {
        }

        interface OSMProps {
        }
        export class OSM extends OLComponent<OSMProps, any> {
        }

        interface VectorProps {
        }
        export class Vector extends OLComponent<VectorProps, any> {
        }

        interface XYZProps {
            url?: string;
            urls?: string[];
        }
        export class XYZ extends OLComponent<XYZProps, any> {
        }
    }
}
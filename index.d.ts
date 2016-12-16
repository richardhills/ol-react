// Type definitions for ol-react 0.1.5
// Project: https://github.com/richardhills/ol-react
// Definitions by: Status Awareness Systems (http://statusas.com)

/// <reference types="react" />
/// <reference types="openlayers" />

declare module "ol-react" {
    export import control = __OLReact.control;
    export import geom = __OLReact.geom;
    export import layer = __OLReact.layer;
    export import source = __OLReact.source;

    export import Feature = __OLReact.Feature;
    export import Map = __OLReact.Map;
    export import View = __OLReact.View;
}

declare namespace __OLReact {
    export class OLComponent<P, S> extends React.Component<P, S> {
    }

    export class OLContainer<P, S> extends OLComponent<P, S> {

    }

    interface FeatureProps {
        style?: Object;
        children?: JSX.Element;
        id?: any;
    }

    export class Feature extends OLComponent<FeatureProps, any> {
        updateFromProps(props: FeatureProps): void;
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
    }

    export class Map extends React.Component<MapProps, any> {
        focus(): void;
    }

    interface ViewProps {
        center: number[];
        resolution: number;
        zoom: number;
        onNavigation?: Function;
    }

    export class View extends OLComponent<ViewProps, any> {
        onCenterChanged(event: any): void;
        onResolutionChanged(event: any): void;
        updateCenterAndResolutionFromProps_(props: ViewProps): void;
        updateFromProps_(props: ViewProps, isMounting: boolean): void;

    }

    ///////
    ///////     CONTROL
    ///////
    export namespace control {
        export const ScaleLineUnit = {
            DEGREES: 'degrees',
            IMPERIAL: 'imperial',
            NAUTICAL: 'nautical',
            METRIC: 'metric',
            US: 'us'
        }

        export const ScaleLineUnits = [
            'degrees',
            'imperial',
            'nautical',
            'metric',
            'us'
        ]

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
            layers?: ol.layer.Layer[] | ol.Collection;
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
            extent?: OLPropTypes.Extent,
            label?: React.ReactNode;
            tipLabel?: string;
        }

        export class ZoomToExtent extends OLControl<ZoomToExtentProps, any> {
        }
    }

    ///////
    ///////     GEOM
    ///////
    export namespace geom {
        interface LineStringProps {
            children?: number[][];
        }

        export class LineString extends OLComponent<LineStringProps, any> {
            updateFromProps(props: LineStringProps): void;
        }
    }



    ///////
    ///////     LAYER
    ///////
    export namespace layer {
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

    ///////
    ///////     SOURCE
    ///////
    export namespace source {
        interface OSMProps {
        }
        export class OSM extends OLComponent<OSMProps, any> {
        }

        interface VectorProps {
        }
        export class Vector extends OLComponent<VectorProps, any> {
        }

        interface XYZProps {
            url: string;
        }
        export class XYZ extends OLComponent<XYZProps, any> {
        }
    }
}
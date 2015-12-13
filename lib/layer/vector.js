"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var ol = _interopRequire(require("openlayers"));

var OLComponent = _interopRequire(require("../ol-component"));

var Vector = (function (_OLComponent) {
  function Vector(props) {
    _classCallCheck(this, Vector);

    _get(Object.getPrototypeOf(Vector.prototype), "constructor", this).call(this, props);
    this.layer = new ol.layer.Vector({
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: [0, 0, 255, 0.6]
        })
      })
    });
  }

  _inherits(Vector, _OLComponent);

  _createClass(Vector, {
    getChildContext: {
      value: function getChildContext() {
        return {
          layer: this.layer,
          map: this.context.map
        };
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        this.context.map.addLayer(this.layer);
      }
    }
  });

  return Vector;
})(OLComponent);

module.exports = Vector;

Vector.propTypes = {};

Vector.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
};

Vector.childContextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Vector),
  map: React.PropTypes.instanceOf(ol.Map)
};
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var ol = _interopRequire(require("openlayers"));

var OLComponent = _interopRequire(require("./ol-component"));

var Feature = (function (_OLComponent) {
  function Feature(props) {
    _classCallCheck(this, Feature);

    _get(Object.getPrototypeOf(Feature.prototype), "constructor", this).call(this, props);
    this.feature = new ol.Feature({});
    this.updateFromProps(props);
  }

  _inherits(Feature, _OLComponent);

  _createClass(Feature, {
    updateFromProps: {
      value: function updateFromProps(props) {
        this.feature.setStyle(this.buildStyle(props));
      }
    },
    buildStyle: {
      value: function buildStyle(props) {
        var result;
        if (props.style) {
          result = {};
          if (props.style.fill) {
            result.fill = new ol.style.Fill(props.style.fill);
          }
          if (props.style.stroke) {
            result.stroke = new ol.style.Stroke(props.style.stroke);
          }
          result = new ol.style.Style(result);
        }
        return result;
      }
    },
    getChildContext: {
      value: function getChildContext() {
        return {
          feature: this.feature
        };
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        this.context.source.addFeature(this.feature);
      }
    },
    componentWillReceiveProps: {
      value: function componentWillReceiveProps(newProps) {
        this.updateFromProps(newProps);
      }
    }
  });

  return Feature;
})(OLComponent);

module.exports = Feature;

Feature.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.element
};

Feature.contextTypes = {
  source: React.PropTypes.instanceOf(ol.source.Source)
};

Feature.childContextTypes = {
  feature: React.PropTypes.instanceOf(ol.Feature)
};
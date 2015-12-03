"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var findDOMNode = require("react-dom").findDOMNode;

var ol = _interopRequire(require("openlayers"));

var OLComponent = _interopRequire(require("./ol-component"));

var interaction = _interopRequireWildcard(require("./interaction"));

var Map = (function (_React$Component) {
  function Map(props) {
    _classCallCheck(this, Map);

    _get(Object.getPrototypeOf(Map.prototype), "constructor", this).call(this, props);
    this.map = new ol.Map({
      interactions: [new interaction.DragPan(this.onDrag.bind(this))]
    });
  }

  _inherits(Map, _React$Component);

  _createClass(Map, {
    onDrag: {
      value: function onDrag(newCenter) {
        this.props.actions.onNavigation({
          center: newCenter
        });
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        this.map.setTarget(this.refs.us);
      }
    },
    getChildContext: {
      value: function getChildContext() {
        return {
          map: this.map
        };
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement("div", { ref: "us" }),
          React.createElement(
            "div",
            null,
            this.props.children,
            this.props.view
          )
        );
      }
    }
  });

  return Map;
})(React.Component);

module.exports = Map;

Map.propTypes = {
  view: React.PropTypes.element.isRequired,
  children: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.element), React.PropTypes.element]),
  actions: React.PropTypes.object.isRequired
};

Map.childContextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
};
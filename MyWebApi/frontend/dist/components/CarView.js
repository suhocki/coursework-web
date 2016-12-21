'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Car = require('../api/Car');

  return function (_React$Component) {
    _inherits(CarView, _React$Component);

    function CarView(props) {
      _classCallCheck(this, CarView);

      var _this = _possibleConstructorReturn(this, (CarView.__proto__ || Object.getPrototypeOf(CarView)).call(this, props));

      _this.state = {
        car: []
      };

      Car.get(props.params.id).then(function (car) {
        return _this.setState({ car: car });
      });
      return _this;
    }

    _createClass(CarView, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'content',
          { 'data-flow': 'vertical', 'data-align': 'left' },
          React.createElement(
            'h2',
            null,
            this.state.car.Name
          ),
          React.createElement('img', { className: 'photo', src: this.state.car.Photo }),
          React.createElement(
            'p',
            null,
            React.createElement(
              'strong',
              null,
              'Year:'
            ),
            ' ',
            this.state.car.Year
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'strong',
              null,
              'Range:'
            ),
            ' ',
            this.state.car.Range
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'strong',
              null,
              'Color:'
            ),
            ' ',
            this.state.car.Color
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'strong',
              null,
              'Features:'
            ),
            ' ',
            this.state.car.Features
          ),
          React.createElement(
            'p',
            null,
            this.state.car.Description
          )
        );
      }
    }]);

    return CarView;
  }(React.Component);
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\CarView.js.map
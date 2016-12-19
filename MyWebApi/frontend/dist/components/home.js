'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Link = require('reactRouter').Link;
  var Car = require('../api/Car');

  var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
      _classCallCheck(this, Card);

      return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'card-component',
          null,
          React.createElement(
            'strong',
            null,
            this.props.name
          ),
          React.createElement('img', { src: this.props.photo })
        );
      }
    }]);

    return Card;
  }(React.Component);

  return function (_React$Component2) {
    _inherits(Home, _React$Component2);

    function Home() {
      _classCallCheck(this, Home);

      var _this2 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

      _this2.state = {
        cars: []
      };

      Car.get().then(function (cars) {
        return _this2.setState({ cars: cars });
      });
      return _this2;
    }

    _createClass(Home, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'content',
          null,
          this.state.cars.map(function (car) {
            return React.createElement(Card, {
              name: car.Name,
              photo: car.Photo });
          })
        );
      }
    }]);

    return Home;
  }(React.Component);
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\Home.js.map
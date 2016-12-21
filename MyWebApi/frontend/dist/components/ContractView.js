'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Contract = require('../api/Contract');

  return function (_React$Component) {
    _inherits(ContractView, _React$Component);

    function ContractView(props) {
      _classCallCheck(this, ContractView);

      var _this = _possibleConstructorReturn(this, (ContractView.__proto__ || Object.getPrototypeOf(ContractView)).call(this, props));

      _this.state = {
        contract: {}
      };

      Contract.get(props.params.id).then(function (contract) {
        return _this.setState({ contract: contract });
      });
      return _this;
    }

    _createClass(ContractView, [{
      key: 'render',
      value: function render() {
        var contract = this.state.contract;

        if (contract.Id) {
          return React.createElement(
            'content',
            { 'data-flow': 'vertical', 'data-align': 'left' },
            React.createElement(
              'h2',
              null,
              contract.User.Name,
              ' - ',
              contract.Car.Name
            ),
            React.createElement('img', { className: 'photo', src: contract.Car.Photo }),
            React.createElement(
              'p',
              null,
              React.createElement(
                'strong',
                null,
                'Starts:'
              ),
              ' ',
              new Date(contract.Starts).toLocaleDateString('ru-RU')
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
                'strong',
                null,
                'Ends:'
              ),
              ' ',
              new Date(contract.Ends).toLocaleDateString('ru-RU')
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
                'strong',
                null,
                'Price:'
              ),
              ' ',
              contract.Price
            )
          );
        } else {
          return React.createElement(
            'p',
            null,
            'Loading...'
          );
        }
      }
    }]);

    return ContractView;
  }(React.Component);
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\ContractView.js.map
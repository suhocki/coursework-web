'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Link = require('reactRouter').Link;
  var Contract = require('../api/Contract');
  var contract = {
    starts: '',
    ends: '',
    price: '',
    userId: '',
    carId: ''
  };

  return function (_React$Component) {
    _inherits(AddContract, _React$Component);

    function AddContract() {
      _classCallCheck(this, AddContract);

      var _this = _possibleConstructorReturn(this, (AddContract.__proto__ || Object.getPrototypeOf(AddContract)).call(this));

      _this.state = {};
      return _this;
    }

    _createClass(AddContract, [{
      key: 'onSubmit',
      value: function onSubmit(event) {
        Contract.post(contract).then(function (response) {
          console.log(response);
        });

        event.preventDefault();
      }
    }, {
      key: 'onStartsChange',
      value: function onStartsChange(event) {
        event.preventDefault();
        contract.starts = event.target.value;
      }
    }, {
      key: 'onEndsChange',
      value: function onEndsChange(event) {
        event.preventDefault();
        contract.ends = event.target.value;
      }
    }, {
      key: 'onPriceChange',
      value: function onPriceChange(event) {
        event.preventDefault();
        contract.price = event.target.value;
      }
    }, {
      key: 'onUserIdChange',
      value: function onUserIdChange(event) {
        event.preventDefault();
        contract.userId = event.target.value;
      }
    }, {
      key: 'onCarIdChange',
      value: function onCarIdChange(event) {
        event.preventDefault();
        contract.carId = event.target.value;
      }
    }, {
      key: 'render',
      value: function render() {
        var users = this.state.users;

        return React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            '\u041D\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442'
          ),
          React.createElement(
            'form',
            { className: 'contractAdd' },
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'dateTime',
                placeholder: '\u041D\u0430\u0447\u0430\u043B\u043E',
                onChange: this.onStartsChange })
            ),
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'dateTime',
                placeholder: '\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435',
                onChange: this.onEndsChange })
            ),
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'text',
                placeholder: '\u0426\u0435\u043D\u0430',
                onChange: this.onPriceChange })
            ),
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'text',
                placeholder: 'userId',
                onChange: this.onUserIdChange })
            ),
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'text',
                placeholder: 'carId',
                onChange: this.onCarIdChange })
            ),
            React.createElement('input', {
              type: 'button',
              value: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
              onClick: this.onSubmit })
          )
        );
      }
    }]);

    return AddContract;
  }(React.Component);
});
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\components\AddContract.js.map
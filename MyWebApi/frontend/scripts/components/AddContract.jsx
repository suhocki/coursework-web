define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const Contract = require('../api/Contract');
  var contract = {
    starts: '',
    ends: '',
    price: '',
    userId: '',
    carId: '',
  }

  return class AddContract extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    onSubmit(event) {
      Contract.post(contract).then(response => {
        console.log(response);
      })

      event.preventDefault();
    }

    onStartsChange (event) {
      event.preventDefault()
      contract.starts = event.target.value;
    }

    onEndsChange (event) {
      event.preventDefault()
      contract.ends = event.target.value;
    }

    onPriceChange (event) {
      event.preventDefault()
      contract.price = event.target.value;
    }

    onUserIdChange (event) {
      event.preventDefault()
      contract.userId = event.target.value;
    }

    onCarIdChange(event) {
      event.preventDefault()
      contract.carId = event.target.value;
    }

    render() {
      var users = this.state.users;


      return (
        <div>
          <p>Новый контракт</p>
          <form className="contractAdd">
            <p><input
              type="dateTime"
              placeholder="Начало"
              onChange={this.onStartsChange}/>
            </p>
            <p><input
              type="dateTime"
              placeholder="Окончание"
              onChange={this.onEndsChange}/>
            </p>
            <p><input
              type="text"
              placeholder="Цена"
              onChange={this.onPriceChange}/>
            </p>
            <p><input
              type="text"
              placeholder="userId"
              onChange={this.onUserIdChange}/>
            </p>
            <p><input
              type="text"
              placeholder="carId"
              onChange={this.onCarIdChange}/>
            </p>
            <input
              type="button"
              value="Добавить"
              onClick={this.onSubmit}/>
          </form>
        </div>
      )
    }
  };
});

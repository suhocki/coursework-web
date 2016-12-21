define(function (require) {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const Route = require('reactRouter').Route;
  const Router = require('reactRouter').Router;
  const browserHistory = require('reactRouter').browserHistory;

  const AddCar = require('components/AddCar');
  const Home = require('components/Home');
  const AddUser = require('components/AddUser');
  const AddContract = require('components/AddContract');

  const ShowContracts = require('components/ShowContracts');

  const CarView = require('components/CarView');
  const ContractView = require('components/ContractView');

  const Car = require('../api/Car');

  class App extends React.Component {
    constructor() {
      super();
      this.timeout = null;
    }

    search(event) {
      event.persist();

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        var query = event.target.value;

        Car.getByFilter(query).then(cars => {
          browserHistory.push('/?filter=' + query);
        })
      }, 200);
    }

    render() {
      return (
        <main>
          <aside>
            <h2>Car rental</h2>
            <Link to='/' activeClassName="current">Home</Link>
            <Link to='/addUser' activeClassName="current">Add user</Link>
            <Link to='/addCar' activeClassName="current">Add car</Link>
            <Link to='/addContract' activeClassName="current">Add contract</Link>
            <Link to='/showContracts' activeClassName="current">Show contracts</Link>
            <span className="separator"></span>
            <input type="text" placeholder="Search..." className="search" onChange={this.search.bind(this)}/>
          </aside>

          {this.props.children}
        </main>
      )
    }
  }

  return class Routes extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path="/" component={Home}></Route>=
            <Route path="/addCar" component={AddCar}></Route>
            <Route path="/addUser" component={AddUser}></Route>
            <Route path="/addContract" component={AddContract}></Route>

            <Route path="/showContracts" component={ShowContracts}></Route>

            <Route path="/car/:id" component={CarView}></Route>
            <Route path="/contract/:id" component={ContractView}></Route>
          </Route>
        </Router>
      )
    }
  };
});

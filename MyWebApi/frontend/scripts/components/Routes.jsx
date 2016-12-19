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

  const ShowUsers = require('components/ShowUsers');
  const ShowCars = require('components/ShowCars');
  const ShowContracts = require('components/ShowContracts');

  class App extends React.Component {
    render() {
      return (
        <main>
          <aside>
            <h2>CarSearch</h2>
            <Link to='/' activeClassName="current">Home</Link>
            <Link to='/addUser' activeClassName="current">Add user</Link>
            <Link to='/addCar' activeClassName="current">Add car</Link>
            <Link to='/addContract' activeClassName="current">Add contract</Link>
            <Link to='/showUsers' activeClassName="current">Show users</Link>
            <Link to='/showContracts' activeClassName="current">Show contracts</Link>
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
            <Route path="/" component={Home}></Route>
            <Route path="/addUser" component={AddUser}></Route>
            <Route path="/addCar" component={AddCar}></Route>
            <Route path="/addContract" component={AddContract}></Route>

            <Route path="/showUsers" component={ShowUsers}></Route>
            <Route path="/showCars" component={ShowCars}></Route>
            <Route path="/showContracts" component={ShowContracts}></Route>
          </Route>
        </Router>
      )
    }
  };
});

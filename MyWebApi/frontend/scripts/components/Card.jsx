define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;

  return class Card extends React.Component {
    render() {
      return (
        <card-component>
          <Link to={'/car/' + this.props.id}>{this.props.name}</Link>
          <img src={this.props.photo || IMG}/>
        </card-component>
      )
    }
  }
});

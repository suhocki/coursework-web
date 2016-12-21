define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const Car = require('../api/Car');

  return class AddCar extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    imageChosen(event) {
      for (let file of event.target.files) {
        if (!file.type.match('image.*'))
          continue;

        let reader = new FileReader();
        reader.addEventListener('load', () => this.setState({photo: reader.result}));
        reader.readAsDataURL(file);
      }
    }

    submit(event) {
      const fields = ['name', 'description', 'features', 'year', 'range', 'color', 'photo'];

      var formData = new FormData();
      formData.append('available', true);

      for (let field of fields)
        formData.append(field, this.state[field]);

      Car.post(formData);
      event.preventDefault();
    }

    render() {
      return (
        <content data-flow="vertical">
          <h2>Add a new car</h2>

          <form>
            <input type="text" placeholder="Name" onChange={e => this.setState({name: e.target.value})}/>
            <textarea placeholder="Description" onChange={e => this.setState({description: e.target.value})}></textarea>
            <textarea placeholder="Features" onChange={e => this.setState({features: e.target.value})}></textarea>
            <input type="number" placeholder="Year" onChange={e => this.setState({year: e.target.value})}/>
            <input type="number" placeholder="Range" onChange={e => this.setState({range: e.target.value})}/>
            <input type="text" placeholder="Color" onChange={e => this.setState({color: e.target.value})}/>
            <input type="file" onChange={this.imageChosen.bind(this)}/>
            <img src={this.state.photo} className="preview"/>
            <button onClick={this.submit.bind(this)}>Submit</button>
          </form>
        </content>
      )
    }
  }
});

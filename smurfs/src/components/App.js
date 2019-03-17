import React from "react";
import "./App.css";
import { fetchingSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  handleSmurfInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  AddNewSmurf = e => {
    const { 
      name,
       age,
        height
       } = this.state;

    addSmurf({
       name,
        age,
         height
         });
    this.setState({
       name: "",
        age: "",
        height: "" 
      });
  };
  render() {
    if (this.props.fetchingSmurfs) {
      <h2>Loading Your Smurfs</h2>;
    }
    return (
      <div className="App">
        <h1>Eli's smurf collection</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div>
              <h3>Name: {smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          );
        })}
        <form onSubmit={() => this.AddNewSmurf()}>
          <input
            type="text"
            placeholder="Smurf Name"
            value={this.state.name}
            name="name"
            onChange={this.handleSmurfInput}
          />
          <input
            type="text"
            placeholder="Age"
            value={this.state.age}
            name="age"
            onChange={this.handleSmurfInput}
          />
          <input
            type="text"
            placeholder="Height"
            value={this.state.height}
            name="height"
            onChange={this.handleSmurfInput}
          />

          <button onClick={() => this.handleAddNewSmurf()}>Add A Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchingSmurfs }
)(App);

import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/ui/Header";
import NuevaCita from "./components/layout/NuevaCita";

class App extends Component {
  state = {
    citas: []
  };

  createNewCita = data => {
    console.log(data);

    const citas = [... this.state.citas, datos];

    this.setState({
      citas
    })
    }
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador" />
        <div className="row">
          <div className="col-md-12 max-auto">
            <NuevaCita  createNewCita = {this.createNewCita}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

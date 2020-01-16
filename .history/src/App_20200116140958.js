import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/ui/Header";
import NuevaCita from "./components/layout/NuevaCita";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <Header titulo="Administrador" />
        <div className="row">
          <div className="col-md-10 max-auto">
            <NuevaCita />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

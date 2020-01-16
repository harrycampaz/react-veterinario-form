import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/ui/Header";
import NuevaCita from "./components/layout/NuevaCita";
import ListCitas from "./components/layout/ListCitas";

class App extends Component {
  state = {
    citas: []
  };

  createNewCita = data => {
    const citas = [...this.state.citas, data];

    this.setState({
      citas
    });
  };

  deleteCita = id => {
    console.log(id);

    //Copiar el state
    const citasActuales = [... this.state.citas];

    // Utilizar filter para eliminar id de arreglo

    const citas = citasActuales.filter(cita => cita.id !== id);

    //Actualizar states
    this.setState({
      citas: [citas]
    })

    console.log('Diste cliecn');
    
    
  }
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador" />
        <div className="row">
          <div className="col-md-12 max-auto">
            <NuevaCita createNewCita={this.createNewCita} />
          </div>

          <div className="col-md-12 max-auto">
            <ListCitas 
            citas={this.state.citas}
            deleteCita = {this.deleteCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

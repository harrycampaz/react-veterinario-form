import React, { Component } from "react";

class NuevaCita extends Component {

    state ={
        cita: {
            mascota: '',
            propietario: '',
            facha: '',
            hora: '',
            sintomas: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.name + ' : ' + e.target.value);

        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })

    }

  render() {
    return (
        
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2> Crear una nueva cita</h2>
        <form>
          <div class="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label" for="nombre">
              Nombre mascota
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                name="mascota"
                id="mascota"
                placeholder="Nombre de mascota"
                onChange = {this.handleChange}
                value = {this.state.cita.mascota}
              />
            </div>
          </div>
          <div class="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label" for="nombre">
              Nombre propietario
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                name="propietario"
                id="propietario"
              
                placeholder="Nombre de propietario"
                onChange = {this.handleChange}
                value = {this.state.cita.mascota}
              />
            </div>
          </div>

          <div class="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label" for="nombre">
              Fecha
            </label>
            <div className="col-sm-8 col-lg-4">
              <input
                type="date"
                className="form-control"
                name="fecha"
                id="fecha"
                onChange = {this.handleChange}
                value = {this.state.cita.mascota}
                
              />
            </div>

            <label className="col-sm-4 col-lg-2 col-form-label" for="nombre">
              Hora
            </label>
            <div className="col-sm-8 col-lg-4">
              <input
                type="time"
                className="form-control"
                name="propietario"
                id="propietario"
               
                placeholder="Nombre de propietario"
                onChange = {this.handleChange}
                value = {this.state.cita.mascota}
              />
            </div>
          </div>

          <div class="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label" for="nombre">
              Sintomas
            </label>
            <div className="col-sm-8 col-lg-10">
              <textarea
                type="text"
                className="form-control"
                name="propietario"
                id="propietario"
                placeholder="Describe los sintomas"
                onChange = {this.handleChange}
                value = {this.state.cita.mascota}
              ></textarea>

            </div>
          </div>

          <input type="submit" className=" py-3 mt-2 btn btn-success btn-block" value="Agregar cita"/>
        </form>
      </div>
      </div>
    );
  }
}

export default NuevaCita;

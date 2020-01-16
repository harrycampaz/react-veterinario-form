import React, { Component } from "react";

class NuevaCita extends Component {

    state ={
        cita: {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }, 
        error : false
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

    haldleSubmit = (e) => {

        e.preventDefault();

        const {mascota, propietario, hora, fecha, sintomas} = this.state.cita;

        if(mascota === '' || propietario === '' || hora === '' || fecha === '' || sintomas ===''){

            this.setState({
                error: true
            })

            return;

        }
        this.props.createNewCita(this.state.cita);
    }

  render() {
    return (
        
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2> Crear una nueva cita</h2>
        <form onSubmit = {this.haldleSubmit}>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
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
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
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
                value = {this.state.cita.propietario}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Fecha
            </label>
            <div className="col-sm-8 col-lg-4">
              <input
                type="date"
                className="form-control"
                name="fecha"
                id="fecha"
                onChange = {this.handleChange}
                value = {this.state.cita.fecha}
                
              />
            </div>

            <label className="col-sm-4 col-lg-2 col-form-label">
              Hora
            </label>
            <div className="col-sm-8 col-lg-4">
              <input
                type="time"
                className="form-control"
                name="hora"
                id="hora"
               
                placeholder="Nombre de propietario"
                onChange = {this.handleChange}
                value = {this.state.cita.hora}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Sintomas
            </label>
            <div className="col-sm-8 col-lg-10">
              <textarea
                type="text"
                className="form-control"
                name="sintomas"
                id="sintomas"
                placeholder="Describe los sintomas"
                onChange = {this.handleChange}
                value = {this.state.cita.sintomas}
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

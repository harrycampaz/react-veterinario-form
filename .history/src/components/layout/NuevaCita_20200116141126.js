import React, { Component } from "react";

class NuevaCita extends Component {
  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2> Crear una nueva cita</h2>
        </div>

        <form>
          <div class="form-group row">
            <label className='col-sm-4' for="nombre">Nombre mascota</label>
            <input
              type="text"
              className="form-control"
              name="mascota"
              id=""
              aria-describedby="emailHelpId"
              placeholder="Nombre de mascota"
            />
            <small id="emailHelpId" class="form-text text-muted">
              Help text
            </small>
          </div>
        </form>
      </div>
    );
  }
}

export default NuevaCita;

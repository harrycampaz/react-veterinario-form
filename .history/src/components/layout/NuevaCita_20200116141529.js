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
            <label className='col-sm-4 col-lg-2 col-form-label' for="nombre">Nombre mascota</label>
           <div className="col-sm-8 col-lg-10">
           <input
              type="text"
              className="form-control"
              name="mascota"
              id="mascota"
              aria-describedby="emailHelpId"
              placeholder="Nombre de mascota"
            />
            
           </div>
          </div>
          <div class="form-group row">
            <label className='col-sm-4 col-lg-2 col-form-label' for="nombre">Nombre propietario</label>
           <div className="col-sm-8 col-lg-10">
           <input
              type="text"
              className="form-control"
              name="propietario"
              id="propietario"
              aria-describedby="emailHelpId"
              placeholder="Nombre de propietario"
            />
            
           </div>
          </div>

          <div class="form-group row">
            <label className='col-sm-4 col-lg-2 col-form-label' for="nombre">Nombre propietario</label>
           <div className="col-sm-8 col-lg-10">
           <input
              type="date"
              className="form-control"
              name="propietario"
              id="propietario"
              aria-describedby="emailHelpId"
              placeholder="Nombre de propietario"
            />
            
           </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NuevaCita;

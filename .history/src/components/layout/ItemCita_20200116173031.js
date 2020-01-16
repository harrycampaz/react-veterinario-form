import React from "react";

const ItemCita = ({ cita, deleteCita }) => {
  return (
      <div className="card mt-2 px-4">
        <div class="card-body">
          <h4 class="card-title">{cita.mascota}</h4>
          <p class="card-text">
            <span>Dueño: </span>
            {cita.propietario}
          </p>
          <p class="card-text">
            <span>Fecha: </span>
            {cita.fecha}
          </p>
          <p class="card-text">
            <span>Hora: </span>
            {cita.hora}
          </p>

          <button className="btn btn-primary" onClick= {deleteCita(cita.id)} >
                  Borrar <span class="badge badge-primary"></span>
          </button>
        </div>
      </div>

  );
};

export default ItemCita;

import React from "react";
import PropTypes from 'prop-types';

const ItemCita = ({ cita, deleteCita }) => {

    console.log(cita.id);
    
  return (
    <div className="col-sm-3  px-1">
      <div className="card mt-2 px-4">
        <div className="card-body">
          <h4 className="card-title">{cita.mascota}</h4>
          <p className="card-text">
            <span>Dueño: </span>
            {cita.propietario}
          </p>
          <p className="card-text">
            <span>Fecha: </span>
            {cita.fecha}
          </p>
          <p className="card-text">
            <span>Hora: </span>
            {cita.hora}
          </p>

          <button className="btn btn-primary" onClick= {() =>deleteCita(cita.id)} >
                  Borrar
          </button>
        </div>
      </div>
      </div>

  );
};

ItemCita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
};

export default ItemCita;

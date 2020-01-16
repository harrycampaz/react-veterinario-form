import React from "react";
import ItemCita from "./ItemCita";
import PropTypes from 'prop-types';

const ListCitas = ({ citas, deleteCita }) => {


    const mensaje = Object.keys(citas).length === 0  ? 'No hay citas' : 'Citas registradas'

  return (
    <div className="mt-2 py-5">
      <div>
        <h2 className="text-center">{mensaje}</h2>

        <div className="row">
          {citas.map(cita => (
            <div className="col-sm-3  px-1">
              <ItemCita key={cita.id} cita={cita} deleteCita = {deleteCita} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ListCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    deleteCita: PropTypes.func.isRequired
};
export default ListCitas;

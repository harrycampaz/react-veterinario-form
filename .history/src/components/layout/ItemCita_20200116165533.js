import React from 'react';

const ItemCita = ({cita}) => {
    return (
       <div className="card bg-dark text-white mt-2">
       
    <h4 class="card-title">{cita.mascota}</h4>
    <p class="card-text" ><span>Dueño: </span>{cita.propietario}</p>
    <p class="card-text" ><span>Fecha: </span>{cita.fecha}</p>
    <p class="card-text" ><span>Hora: </span>{cita.hora}</p>
        
       </div>
    );
};

export default ItemCita;
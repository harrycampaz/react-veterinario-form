import React from "react";
import ItemCita from "./ItemCita";

const ListCitas = ({ citas }) => {
  return (
    <div className="mt-2 py-5">
      <div>
        <h2 className="text-center">Citas registradas</h2>

        <div className="row">
          {citas.map(cita => (
              <div className ="col-sm-6  px-md-5">
<ItemCita  key={cita.id} cita={cita} />
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCitas;

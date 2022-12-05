import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ComponentB = ({ contacto }) => {
  return (
    <div>
      <h2>
        <h6>
          Nombre: { contacto.nombre }
        </h6>
        <h6>
          Apellido: { contacto.apellido }
        </h6>
        <h6>
          Email: { contacto.email }
        </h6>
        <h6>
          Conectado: { contacto.conectado ? 'Contacto En Línea':'Contacto No Disponible' }
        </h6>
      </h2>
    </div>
  );
};


ComponentB.propTypes = {
  contacto : PropTypes.instanceOf(Contact)
};


export default ComponentB;

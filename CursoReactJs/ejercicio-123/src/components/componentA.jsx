import React from 'react';
import { Contact } from '../models/contact.class';
import ComponentB from './componentB';

const ComponentA = () => {

  const defaultContacto = new Contact('Jesús', 'Rojas', 'jesus123@gmail.com', true)

  return (
    <div>
      <div>
        <h1>
          Contacto:
        </h1>
      </div>
      <ComponentB contacto={defaultContacto}></ComponentB>
    </div>
  );
}

export default ComponentA;

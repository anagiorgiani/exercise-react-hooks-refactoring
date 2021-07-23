import React from 'react';
import { useState } from 'react';
import CarsContext from './CarsContext';

function Provider ({ children }){
  const [cars, moveCar] = useState({red: false, blue: false, yellow: false})


  const newState = (car, side) => {
    moveCar({
    ...cars,
    [car]: side,
    },
    );
    }; 

    const context = {
      cars,
      newState,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }

export default Provider;


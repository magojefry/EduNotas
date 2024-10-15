import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plantilla from '@components/base/plantilla'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Plantilla 
              tituloPersonalizado="Título de la Aplicación" 
              estiloAdicional={{ backgroundColor: 'lightblue' }} 
            >
              <h1>Bienvenido a la Aplicación</h1>
              <p>Este es el contenido de la plantilla.</p>
            </Plantilla>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

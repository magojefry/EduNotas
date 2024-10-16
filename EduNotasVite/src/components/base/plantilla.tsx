import React, { ReactNode } from 'react';

interface PlantillaProps {
  children: ReactNode;
}

const Plantilla: React.FC<PlantillaProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Encabezado */}
      <header className="bg-yellow-400 p-4 text-white flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-4 text-2xl">≡</button>
          <h1 className="text-xl font-bold">ESTUDIANTE CAMPUS</h1>
        </div>
        <span>Francisco Hernández Villa Días</span>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Menú lateral */}
        <nav className="bg-blue-200 w-64 p-4">
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center"><span className="mr-2">⌂</span>Inicio</a></li>
            <li><a href="#" className="flex items-center"><span className="mr-2">☆</span>Políticas</a></li>
            <li><a href="#" className="flex items-center"><span className="mr-2">☆</span>Calificaciones</a></li>
            <li><a href="#" className="flex items-center"><span className="mr-2">☆</span>Horarios</a></li>
            <li><a href="#" className="flex items-center"><span className="mr-2">☆</span>Faltas</a></li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <main className="flex-1 p-4 overflow-auto bg-white">
          {children}
        </main>
      </div>

      {/* Pie de página */}
      <footer className="bg-blue-200 p-2 text-center">
      <img src="/images/logo.png" alt="Logo" className="h-8 mx-auto mb-1" />
        <p className="text-sm">Institución Universitaria Colegio Mayor del Cauca</p>
        <p className="text-xs">Versión 3.4.0 - © 2024</p>
      </footer>
    </div>
  );
};

export default Plantilla;
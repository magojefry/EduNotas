import React from 'react';
import Plantilla from '@components/base/plantilla';

const Admin: React.FC = () => {
  return (
    <Plantilla>
      <div className="bg-orange-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Nuevo Usuario</h2>
        <form className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block mb-1">Nombres:</label>
            <input type="text" className="w-full p-2 border rounded" defaultValue="Juan José" />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Apellidos:</label>
            <input type="text" className="w-full p-2 border rounded" defaultValue="Concha Trujillo" />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Fecha de Nacimiento:</label>
            <input type="date" className="w-full p-2 border rounded" defaultValue="1999-07-12" />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Sexo:</label>
            <select className="w-full p-2 border rounded">
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Tipo Documento:</label>
            <input type="text" className="w-full p-2 border rounded" defaultValue="1067852459" />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Numero Documento:</label>
            <input type="text" className="w-full p-2 border rounded" defaultValue="Cedula de Ciudadania" />
          </div>
          {/* Añade aquí el resto de los campos del formulario siguiendo el mismo patrón */}
          <div className="col-span-2 flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                <span className="text-4xl">📷</span>
              </div>
              <button className="bg-yellow-400 text-white px-4 py-2 rounded">Subir Foto</button>
            </div>
            <div>
              <label className="block mb-1">Estado:</label>
              <select className="p-2 border rounded">
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>
          <div className="col-span-2 text-center mt-6">
            <button type="submit" className="bg-yellow-400 text-white px-8 py-2 rounded-full">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Plantilla>
  );
};

export default Admin;
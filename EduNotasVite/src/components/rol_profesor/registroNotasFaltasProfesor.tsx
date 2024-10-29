import React, { useState } from 'react';

interface Estudiante {
  nombre: string;
  nota1: number;
  nota2: number;
  nota3: number;
  final: number;
  faltas: number;
  habilitacion: number;
}

const RegistroNotasFaltasProfesor: React.FC = () => {
  const [notas, setNotas] = useState<Estudiante[]>([
    { nombre: "Juan Camilo Pedraza", nota1: 3.1, nota2: 0.0, nota3: 0.0, final: 3.1, faltas: 0.9, habilitacion: 2 },
    { nombre: "Carlos Alexander Vidal Realpe", nota1: 3.0, nota2: 0.0, nota3: 0.0, final: 3.0, faltas: 2.0, habilitacion: 3 },
    { nombre: "Manuel Salazar", nota1: 3.5, nota2: 2.5, nota3: 0.0, final: 2.5, faltas: 4, habilitacion: 0 },
    { nombre: "Javier Gómez", nota1: 4.1, nota2: 2.9, nota3: 0.0, final: 3.0, faltas: 3, habilitacion: 0 },
    { nombre: "Natalia Jiménez", nota1: 3.7, nota2: 3.3, nota3: 0.0, final: 3.3, faltas: 1, habilitacion: 1 },
    { nombre: "Dayer Majin", nota1: 5.0, nota2: 5.0, nota3: 0.0, final: 5.0, faltas: 10, habilitacion: 5 }
  ]);

  const [editMode, setEditMode] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Pick<Estudiante, 'nota1' | 'nota2' | 'nota3' | 'faltas'>
  ) => {
    const newNotas = [...notas];
    const valor = parseFloat(e.target.value);
  
    if (!isNaN(valor)) {
      newNotas[index][field] = valor;

      // Recalcula la nota final
      const { nota1, nota2, nota3 } = newNotas[index];
      newNotas[index].final = parseFloat(((nota1 + nota2 + nota3) / 3).toFixed(2));
    }
  
    setNotas(newNotas);
  };

  const actualizarNotas = () => {
    setEditMode(true);
  };

  const guardarNotas = () => {
    setEditMode(false);
    console.log("Notas guardadas:", notas);
    alert("Las notas han sido guardadas");
  };

  return (
    <div className="container mx-auto p-5">
      <div className="bg-pink-200 p-5 rounded-lg mb-5">
        {/* Logo y título */}
        <div className="flex items-center mb-5">
          <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-full mr-12">
            <img src="" alt="Logo Unimayor" className="w-48 h-auto mb-5" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Listado de Estudiantes</h1>
        </div>

        {/* Bloque de información de la materia */}
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <p><strong>Nombre de la materia:</strong> Electiva 5</p>
          <p><strong>Semestre:</strong> 8</p>
          <p><strong>Salón:</strong> Laboratorio de redes</p>
          <p><strong>Horario:</strong> Martes 7:00 pm - 10:00 pm</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-xl font-semibold mb-4">Notas</h2>
        
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2">A</th>
              <th className="border px-4 py-2">B</th>
              <th className="border px-4 py-2">C</th>
              <th className="border px-4 py-2">D</th>
              <th className="border px-4 py-2">E</th>
              <th className="border px-4 py-2">F</th>
              <th className="border px-4 py-2">G</th>
            </tr>
            <tr>
              <th className="border px-4 py-2">N°</th>
              <th className="border px-4 py-2">Nombres y apellidos</th>
              <th className="border px-4 py-2">Nota 1° Corte</th>
              <th className="border px-4 py-2">Nota 2° Corte</th>
              <th className="border px-4 py-2">Nota 3° Corte</th>
              <th className="border px-4 py-2">Nota Final</th>
              <th className="border px-4 py-2">Faltas</th>
              <th className="border px-4 py-2">Nota Habilitación</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((estudiante, index) => (
              <tr key={index} className="border-b">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{estudiante.nombre}</td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={estudiante.nota1}
                    onChange={(e) => handleInputChange(e, index, "nota1")}
                    disabled={!editMode}
                    className="border p-1 rounded"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={estudiante.nota2}
                    onChange={(e) => handleInputChange(e, index, "nota2")}
                    disabled={!editMode}
                    className="border p-1 rounded"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={estudiante.nota3}
                    onChange={(e) => handleInputChange(e, index, "nota3")}
                    disabled={!editMode}
                    className="border p-1 rounded"
                  />
                </td>
                <td className="border px-4 py-2">{estudiante.final}</td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={estudiante.faltas}
                    onChange={(e) => handleInputChange(e, index, "faltas")}
                    disabled={!editMode}
                    className="border p-1 rounded"
                  />
                </td>
                <td className="border px-4 py-2">{estudiante.habilitacion}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 ${editMode ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={actualizarNotas}
            disabled={editMode}
          >
            Actualizar
          </button>
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded ${!editMode ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={guardarNotas}
            disabled={!editMode}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistroNotasFaltasProfesor;

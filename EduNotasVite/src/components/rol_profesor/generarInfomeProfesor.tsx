import React, { useState } from 'react';

interface InformeProfesor {
  codigo: string;
  nombre: string;
  nota1: number;
  nota2: number;
  nota3: number;
  final: number;
  faltas: number;
  habilitacion: number;
}

const InformeProfesor = () => {
  const [notas, setNotas] = useState<InformeProfesor[]>([
    { codigo: "99552211", nombre: "Juan Camilo Pedraza", nota1: 3.1, nota2: 0.0, nota3: 0.0, final: 3.1, faltas: 0.9, habilitacion: 2 },
    // Otros estudiantes...
  ]);

  const [editMode] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Pick<InformeProfesor, 'nota1' | 'nota2' | 'nota3' | 'faltas'>
  ) => {
    const valor = parseFloat(e.target.value);
    
    if (!isNaN(valor)) {
      setNotas(prevNotas => {
        const newNotas = [...prevNotas];
        newNotas[index][field] = valor;

        // Recalcula la nota final
        const { nota1, nota2, nota3 } = newNotas[index];
        newNotas[index].final = parseFloat(((nota1 + nota2 + nota3) / 3).toFixed(2));

        return newNotas;
      });
    }
  };

  return (
    <div className="flex flex-col h-screen">

      <div className="flex-1 ml-[220px]">

      <div className="bg-[#f8e5c3] p-5 rounded-lg mb-5 ml-[250px] mt-[90px] relative">
      {/* Logo y título */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div className="w-[10px] h-[10px] bg-gray-200 flex items-center justify-center font-bold rounded-full mt-[60px] ml-[50px] mr-[50px]">
            <img src="./images/image3.jpg" alt="Logo Unimayor" className="w-full mb-[50px]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 ml-5">Informe Alumnos</h1>
        </div>
        {/* Botón de imprimir */}
        <button
          className="bg-yellow-500 text-black border-none px-5 py-2 cursor-pointer rounded-lg text-lg hover:bg-yellow-400"
          
        >
          Imprimir
        </button>
      </div>

      {/* Bloque de información de la materia */}
      <div className="bg-[#668CD8] text-white p-4 rounded-lg">
        <p className="mb-2">
          <strong>Nombre de la materia:</strong> Electiva 5
        </p>
        <p className="mb-2">
          <strong>Semestre:</strong> 8
        </p>
        <p className="mb-2">
          <strong>Salón:</strong> Laboratorio de redes
        </p>
        <p>
          <strong>Horario:</strong> Martes 7:00 pm - 10:00 pm
        </p>
      </div>
    </div>

        <div className="overflow-auto max-h-[calc(100vh-160px)] p-6">
          <h2 className="text-center text-2xl mb-4 font-bold">Notas de los estudiantes</h2>
          <table className="table-auto w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">N°</th>
                <th className="border border-gray-300 p-2">Código</th>
                <th className="border border-gray-300 p-2">Nombres y Apellidos</th>
                <th className="border border-gray-300 p-2">Corte 1</th>
                <th className="border border-gray-300 p-2">Corte 2</th>
                <th className="border border-gray-300 p-2">Corte 3</th>
                <th className="border border-gray-300 p-2">Nota Final</th>
                <th className="border border-gray-300 p-2">Habilitación</th>
                <th className="border border-gray-300 p-2">Faltas</th>
              </tr>
            </thead>
            <tbody>
              {notas.map((estudiante, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{estudiante.codigo}</td>
                  <td className="border border-gray-300 p-2">{estudiante.nombre}</td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.nota1}
                      onChange={(e) => handleInputChange(e, index, "nota1")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.nota2}
                      onChange={(e) => handleInputChange(e, index, "nota2")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.nota3}
                      onChange={(e) => handleInputChange(e, index, "nota3")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{estudiante.final}</td>
                  <td className="border border-gray-300 p-2">{estudiante.habilitacion}</td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.faltas}
                      onChange={(e) => handleInputChange(e, index, "faltas")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InformeProfesor;

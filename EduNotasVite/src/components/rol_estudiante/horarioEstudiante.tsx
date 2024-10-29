const HorarioEstudiante = () => {
  return (
    <div className="p-5 mx-auto bg-gray-50">
    <div className="flex justify-between items-center bg-yellow-400 p-4 rounded-md">
      <div className="w-12">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Logo_Unimayor.png" alt="Logo" />
      </div>
      <div className="text-2xl font-bold text-center">Horario</div>
      <div className="text-md font-semibold text-right">Juan Jose Concha Trujillo</div>
    </div>

    <div className="mt-6 bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold text-blue-600 text-center mb-4">
        Itinerario Semanal Campus Unimayor
      </h3>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-2 px-4">HORA</th>
            <th className="border border-gray-300 py-2 px-4">LUNES</th>
            <th className="border border-gray-300 py-2 px-4">MARTES</th>
            <th className="border border-gray-300 py-2 px-4">MIÉRCOLES</th>
            <th className="border border-gray-300 py-2 px-4">JUEVES</th>
            <th className="border border-gray-300 py-2 px-4">VIERNES</th>
            <th className="border border-gray-300 py-2 px-4">SÁBADO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 py-2 px-4">7:00 AM</td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">8:00 AM</td>
            <td className="border border-gray-300 py-2 px-4 bg-blue-200">
              <div>Materia: Base de datos</div>
              <div>Sede: Casa Obando</div>
              <div>Salón: 103</div>
            </td>
            <td className="border border-gray-300 py-2 px-4 bg-blue-200">
              <div>Materia: Base de datos</div>
              <div>Sede: Casa Obando</div>
              <div>Salón: 103</div>
            </td>
            <td className="border border-gray-300 py-2 px-4 bg-blue-200">
              <div>Materia: Base de datos</div>
              <div>Sede: Casa Obando</div>
              <div>Salón: 103</div>
            </td>
            <td className="border border-gray-300 py-2 px-4 bg-blue-200">
              <div>Materia: Base de datos</div>
              <div>Sede: Casa Obando</div>
              <div>Salón: 103</div>
            </td>
            <td className="border border-gray-300 py-2 px-4 bg-blue-200">
              <div>Materia: Base de datos</div>
              <div>Sede: Casa Obando</div>
              <div>Salón: 103</div>
            </td>
            <td className="border border-gray-300 py-2 px-4 bg-blue-200">
              <div>Materia: Base de datos</div>
              <div>Sede: Casa Obando</div>
              <div>Salón: 103</div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">9:00 AM</td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
            <td className="border border-gray-300 py-2 px-4"></td>
          </tr>
          {/* Añade más filas según sea necesario */}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default HorarioEstudiante
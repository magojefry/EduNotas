const HorarioProfesor = () => {
  return (
    <>
        <div className="flex flex-col h-screen">
      <div className="bg-amber-400 p-5 rounded-lg mb-5 ml-4 mt-4">
        <div className="flex items-center mb-5">
          <div className="logo-placeholder flex items-center justify-center bg-amber-500 rounded-full w-10 h-10 mr-4">
            <img src="/images/imagen3.jpg" alt="Logo Unimayor" className="w-64 h-auto" />
          </div>
          <h1 className="text-2xl text-white">Horario</h1> {/* Texto en blanco para mayor contraste */}
        </div>
        <div className="bg-blue-400 text-white text-lg p-4 rounded-lg">
          <p>Itinerario semanal</p>
          <p>Campus Unimayor</p>
        </div>
      </div>

      {/* Se crea una tabla que está bien hecha */}
      <div className="flex flex-1">
        <main className="flex-1 bg-gray-100 p-4">
          <section className="mt-5">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  {["HORA", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"].map(day => (
                    <th key={day} className="border border-gray-300 p-2">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { hour: "7:00 AM", classes: ["", "bg-blue-100", "bg-blue-100", "bg-blue-100", "bg-blue-100", "bg-blue-100"] },
                  { hour: "8:00 AM", classes: ["bg-blue-100", "", "bg-blue-100", "", "", "bg-blue-100"] },
                  { hour: "9:00 AM", classes: ["", "", "", "bg-blue-100", "", "bg-blue-100"] },
                ].map(row => (
                  <tr key={row.hour}>
                    <td className="border border-gray-300 p-2">{row.hour}</td>
                    {row.classes.map((bgColor, index) => (
                      <td key={index} className={`border border-gray-300 p-2 ${bgColor}`}>
                        {bgColor ? "Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103" : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}

export default HorarioProfesor
const VerNotasFaltasEstudiante = () => {
  return (
    <>
    
<div className="container mx-auto p-4">

<main className="bg-white shadow-lg rounded-lg p-6">
  <header className="flex justify-between items-center mb-6 border-b pb-4">
    <div className="student-info">
      <h1 className="text-2xl font-semibold">Matrícula actual</h1>
      <p className="text-gray-600">Promedio semestre: 2.4</p>
      <p className="text-gray-600">Fecha última actualización promedio: 10/10/2024</p>
    </div>
    <div className="student-name">
      <p className="text-xl font-bold">Juan Jose Concha Trujillo</p>
    </div>
  </header>

  <section className="grades-table mb-6">
    <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          {["COMP. MODULO", "CRÉDITOS MATERIA", "NOTA 1° CORTE", "NOTA 2° CORTE", "NOTA 3° CORTE", "NOTA FINAL", "HABILITACIÓN", "FALTAS"].map((header) => (
            <th key={header} className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          {
            modulo: "Administración Data Base",
            creditos: 2,
            nota1: 3.1,
            nota2: 0.0,
            nota3: 0.0,
            final: 0.9,
            habilitacion: "",
            faltas: 0,
          },
          {
            modulo: "Inteligencia Artificial",
            creditos: 3,
            nota1: 3.0,
            nota2: 0.0,
            nota3: 0.0,
            final: 1.2,
            habilitacion: "",
            faltas: 0,
          },
          // Aquí puedes agregar más filas
        ].map((student, index) => (
          <tr key={index} className="hover:bg-gray-200">
            <td className="border-b border-gray-300 px-4 py-2">{student.modulo}</td>
            <td className="border-b border-gray-300 px-4 py-2">{student.creditos}</td>
            <td className="border-b border-gray-300 px-4 py-2">{student.nota1}</td>
            <td className="border-b border-gray-300 px-4 py-2">{student.nota2}</td>
            <td className="border-b border-gray-300 px-4 py-2">{student.nota3}</td>
            <td className="border-b border-gray-300 px-4 py-2">{student.final}</td>
            <td className="border-b border-gray-300 px-4 py-2">{student.habilitacion}</td>
            <td className="border-b border-gray-300 px-4 py-2">{student.faltas}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
</main>
</div>
    </>
  )
}

export default VerNotasFaltasEstudiante
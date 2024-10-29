const RegistroMateriaAdmin = () => {
  const thtable = 'px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-gray-300'
  const tdtable = 'px-4 py-3 border border-gray-300'
  
  return (
    <>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

<section className="bg-amber-50 text-gray-600 body-font">
  <div className="container mx-auto">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">

      <h2 className="mb-4 text-xl font-bold text-center text-gray-900 ">Nueva Materia</h2>





      <form action="#" className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
    <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex items-center">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Nombre de la Materia</label>
            <input type="text" name="name" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5" placeholder="Materia" />
        </div>
        
        <div className="flex items-center">
            <label htmlFor="habilitable" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Habilitable</label>
            <select id="habilitable" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5">
                <option value="SI">Habilitable</option>
                <option value="NO">No Habilitable</option>
            </select>
        </div>
        
        <div className="flex items-center">
            <label htmlFor="nivel-educativo" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Nivel Educativo</label>
            <select id="nivel-educativo" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5">
                <option value="superior">Edu. Superior</option>
                <option value="tecnologo">Tecnólogo</option>
                <option value="tecnico">Técnico</option>
            </select>
        </div>
        
        <div className="flex items-center">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Descripción</label>
            <textarea id="description" className="p-2.5 w-2/3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Descripción"></textarea>
        </div>
        
        <div className="flex items-center">
            <label htmlFor="ano-cursado" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Año Cursado</label>
            <input type="text" name="ano-cursado" id="ano-cursado" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5" placeholder="Año Actual" />
        </div>
    </div>
    
    <div className="flex justify-between items-center mt-6">
    <div className="flex space-x-4">
        <button type="submit" className="text-gray-700 bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-blue-500 rounded">Guardar</button>
        <button type="button" className="text-gray-700 bg-amber-500 border-0 py-2 px-4 focus:outline-none hover:bg-amber-400 rounded">Actualizar</button>
        <button type="button" className="text-gray-700 bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-400 rounded mr-4">Eliminar</button> {/* Añadido margen derecho */}
    </div>

    <div className="flex items-center space-x-4">
        <input type="email" id="email" name="email" placeholder="Buscar Materia" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-40 ml-4" />
        <button type="button" className="text-gray-700 bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-blue-500 rounded">Buscar</button>
    </div>
</div>
</form>
  </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap  border border-gray-300">
        <thead>
          <tr>
            <th className={thtable}>Nombre de la Materia</th>
            <th className={thtable}>Codigo</th>
            <th className={thtable}>Nivel Educacion</th>
            <th className={thtable}>Descripcion</th>
            <th className={thtable}>Habilitable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tdtable}>Matematicas Generales</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
          <tr>
            <td className={tdtable}>Base de datos</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
          <tr>
            <td className={tdtable}>Redes y Comunicacion</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
          <tr>
            <td className={tdtable}>Electiva 5</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
          <tr>
            <td className={tdtable}>Inteligencia artificial</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
          <tr>
            <td className={tdtable}>Comunicacion</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
          <tr>
            <td className={tdtable}>Progremacion 1</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
          <tr>
            <td className={tdtable}>Gention de proyecto</td>
            <td className={tdtable}>14524</td>
            <td className={tdtable}>Educacion Superior</td>
            <td className={tdtable}>Introduccion a los consepto basicos</td>
            <td className={tdtable}>SI</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

    </>    
)
}
export default RegistroMateriaAdmin;

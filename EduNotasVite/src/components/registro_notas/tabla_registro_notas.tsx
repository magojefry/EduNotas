const Tabla_registro_notas = () => {
    const thtabla = 'px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'
    const tdtabla = 'border-t-2 border-b-2 border-gray-200 px-4 py-3'
    const tdtablaresaltar = 'border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900'
  return (
    <>

    <section className="text-gray-600 body-font">
        <div className="container px-2 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Sistema de Notas</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">En este apartado se impretento un crub base de el sistema de notas</p>
            </div>
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                <tr>
                <th className={thtabla}>#</th>
                <th className={thtabla}>Nombres</th>
                <th className={thtabla}>Apellidos</th>
                <th className={thtabla}>Nota</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={tdtabla}>1</td>
                    <td className={tdtabla}>Camilo</td>
                    <td className={tdtabla}>Cuadrado</td>
                    <td className={tdtablaresaltar}>3.2</td>
                </tr>
                <tr>
                    <td className={tdtabla}>2</td>
                    <td className={tdtabla}>Alejandro</td>
                    <td className={tdtabla}>Velez</td>
                    <td className={tdtablaresaltar}>3.5</td>
                    
                </tr>
                <tr>
                    <td className={tdtabla}>3</td>
                    <td className={tdtabla}>Natalia</td>
                    <td className={tdtabla}>Jimenez</td>
                    <td className={tdtablaresaltar}>4.0</td>
                    
                </tr>
                <tr>
                    <td className={tdtabla}>4</td>
                    <td className={tdtabla}>Brayan</td>
                    <td className={tdtabla}>Rivera</td>
                    <td className={tdtablaresaltar}>4.5</td>
                    
                </tr>
                </tbody>
            </table>
            </div>
            <div className="flex pl-4 mt-4 lg:w-1/3 w-full mx-auto">
                <button className="flex ml-auto text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Guardar</button>
                <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Actualizar</button>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Eliminar</button>
            </div>
        </div>
    </section>
    
    </>
  )
}
export default Tabla_registro_notas;
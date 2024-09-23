 const Tabla_registro_notas_grupo = () => {
    const thtabla = 'px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'
    const tdtabla = 'border-t-2 border-b-2 border-gray-200 px-4 py-3'
    const tdtablaresaltar = 'border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900'
  return (
    <>

        <section className="text-gray-600 body-font">
        <div className="container px-2 py-2 mx-auto">
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
        </div>
        </section>
    </>
  )
}

export default Tabla_registro_notas_grupo;

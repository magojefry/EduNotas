const Svg_registro_notas_grupo = () => {

    const bordergrupo = 'border-2 border-gray-200 px-4 py-6 rounded-lg'
    const pathpersona1= 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
    const pathpersona2 = 'M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'
    const p_leading = 'leading-relaxed'

  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container px-2 py-2 mx-auto">
                <div className="flex flex-col text-center w-full mb-50">
                    <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Componente: Fisica</h1>
                </div>
                <div className="flex flex-wrap -m-2 text-center place-content-center">
                    <div className="p-2 md:w-1/4 sm:w-1/2 w-full">
                        <div className={bordergrupo}>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d={pathpersona1}/>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d={pathpersona2}/>
                        </svg>
                        <p className={p_leading}>Grupo</p>
                        <p className={p_leading}>Diurno</p>
                        </div>
                    </div>
                    <div className="p-2 md:w-1/4 sm:w-1/2 w-full">
                        <div className={bordergrupo}>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d={pathpersona1}/>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d={pathpersona2}/>
                        </svg>
                        <p className={p_leading}>Grupo</p>
                        <p className={p_leading}>Nocturno</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}
export default Svg_registro_notas_grupo;
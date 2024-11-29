import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { getAllMate, createMate } from "../../api/regMateAdmin.api" 

interface Materia {
  id: number
  nombre: string
  descripcion: string
  habilitable: boolean
  nivel_educativo: string
  fecha: string
  creador: number
}

interface Mate {
  nombre: string
  descripcion: string
  habilitable: boolean
  nivel_educativo: string
  creador: number
}

export function RegistroMateriaAdmin () {
  const [mates, setMates] = useState<Materia[]>([])

  {/*metodo Get*/}
  useEffect(() =>{
    async function loadMate(){
      const res = await getAllMate()
      setMates(res.data)
    }
    loadMate()
  },[])

  {/*Metodo Post*/}
  const { register, handleSubmit, formState: { errors} } = useForm<Mate>()

  const onSubmit: SubmitHandler<Mate> = ( async data =>{

    const parsedData = {
      ...data,
      habilitable: data.habilitable === true , creador: 1
    }
    console.log("Datos enviados a la API:", parsedData);
    try {
      const res = await createMate(parsedData)
      console.log(res)
      const getRes = await getAllMate();  // Obtener los mates más actualizados
      setMates(getRes.data);
    } catch (error) {
      console.error('Error al crear el Mate:', error)
    }
  })

  const thtable = 'px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-gray-300'
  const tdtable = 'px-4 py-3 border border-gray-300'

  const nivelesEducativos = [
    { value: "primaria", label: "Educación Primaria" },
    { value: "secundaria", label: "Educación Secundaria" },
    { value: "tecnico", label: "Técnico Superior" },
    { value: "tecnologo", label: "Tecnólogo" },
    { value: "pregrado", label: "Pregrado" },
    { value: "posgrado", label: "Posgrado" },
    { value: "maestria", label: "Maestría" },
    { value: "doctorado", label: "Doctorado" },
  ]
  
  const Habilitable = [
    { value: "si", label: "Si" },
    { value: "no", label: "No" }
  ]

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <section className="bg-amber-50 text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">

            <h2 className="mb-4 text-xl font-bold text-center text-gray-900 ">Nueva Materia</h2>
            {/* <div className="flex items-center space-x-4">
                  <input type="email" id="email" name="email" placeholder="Buscar Materia" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-40 ml-4" />
                  <button type="button" className="text-gray-700 bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-blue-500 rounded">Buscar</button>
              </div>*/}

          <form onSubmit={ handleSubmit(onSubmit) } className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-center">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Nombre de Materia</label>
                    <input type="text" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
                    placeholder="Materia" {...register("nombre", {required: true,     
                      maxLength: 5 })} />
                      { errors.nombre && <span>Campo requeridoo</span>}
                </div>

                <div className="flex items-center">
                  <label htmlFor="habilitable" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">
                    Habilitable
                  </label>
                  <select
                    id="habilitable"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
                    {...register("habilitable", { required: true })}
                  >
                    <option value="">Selecciona</option>
                    {Habilitable.map((nivel) => (
                      <option key={nivel.value} value={nivel.value}>
                        {nivel.label}
                      </option>
                    ))}
                  </select>
                  {errors.habilitable && <span>Campo requerido</span>}
                  </div>


                {/*Esta en prueba, se nececita mejorar esta lista*/}
                <div className="flex items-center">
                    <label htmlFor="nivel-educativo" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Nivel Educativo</label>
                    <select id="nivel-educativo" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
                    {...register("nivel_educativo", {required:true})}>
                      
                      <option value="">Nivel Educativo</option>
                        {nivelesEducativos.map((nivel) => (
                          <option key={nivel.value} value={nivel.value}>
                            {nivel.label}
                          </option>
                        ))}
                        
                    </select>
                    { errors.nivel_educativo && <span>Campo requerido</span>}
                </div>
                
                <div className="flex items-center">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 w-1/3">Descripción</label>
                    <textarea id="description" className="p-2.5 w-2/3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Descripción" {...register("descripcion", {required:true, maxLength: 10})}></textarea>
                    { errors.descripcion && <span>Campo requerido</span>}
                </div>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-4">
                  <button type="submit" name="guardarMate" className="text-gray-700 bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-blue-500 rounded">Guardar</button>
                  
                  {/*
                  <button type="button" className="text-gray-700 bg-amber-500 border-0 py-2 px-4 focus:outline-none hover:bg-amber-400 rounded">Actualizar</button>
                  <button type="button" className="text-gray-700 bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-400 rounded mr-4">Eliminar</button> {/* Añadido margen derecho 
                  */}
          
              </div>
              
            </div>
          </form>
        </div>
        {/*Tabla de base de datos*/}
        <div className="lg:w-2/3 w-full mx-auto overflow-x-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap border border-gray-300 lg:block hidden">
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
                {/*forfilas dinámicamente */}
                {mates.length > 0 ? (
                  mates.map((mate) => (
                    <tr key={mate.id}>
                      <td className={tdtable}>{mate.nombre}</td>
                      <td className={tdtable}>{mate.id}</td>
                      <td className={tdtable}>{mate.nivel_educativo}</td>
                      <td className={tdtable}>{mate.descripcion}</td>
                      <td className={tdtable}>{mate.habilitable ? "Sí" : "No"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-3 text-center">
                      Cargando materias...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Version  moviles (formato lista) */}
      <div className="lg:hidden block">
        {mates.length > 0 ? (
          mates.map((mate) => (
            <div key={mate.id} className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h2 className="font-bold text-xl text-gray-900 mb-3">{mate.nombre}</h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong className="text-gray-900">Código:</strong> {mate.id}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong className="text-gray-900">Nivel Educacional:</strong> {mate.nivel_educativo}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong className="text-gray-900">Descripción:</strong> {mate.descripcion}
              </p>
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Habilitable:</strong> {mate.habilitable ? "Sí" : "No"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Cargando materias...</p>
        )}
      </div>

          </div>
        </div>
      </section>
    </>    
  )
}


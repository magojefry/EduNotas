const RegistroUsuarioNuevoAdmin = () => {
    return (
        <div className="p-6 rounded-lg shadow-md bg-[#FCA311]/[0.14]" id="nuevo-usuario-container">
            <div className="flex justify-center items-center mb-4">
                <h4 className="text-3xl font-bold text-center">Nuevo Usuario</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="col-start-1 col-end-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Nombres:</label>
                            <input type="text" defaultValue="Juan Jose" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Apellidos:</label>
                            <input type="text" defaultValue="Concha Trujillo" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Fecha de Nacimiento:</label>
                            <input type="date" defaultValue="1999-07-12" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Sexo:</label>
                            <select className="w-2/3 border border-gray-300 p-2 rounded-lg">
                                <option>Masculino</option>
                            </select>
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Cédula de Ciudadanía:</label>
                            <input type="text" defaultValue="1067852459" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Número Documento:</label>
                            <select className="w-2/3 border border-gray-300 p-2 rounded-lg">
                                <option>Tipo de Documento</option>
                            </select>
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Fecha de Expedición:</label>
                            <input type="date" defaultValue="2016-07-19" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Grupo Sanguíneo:</label>
                            <select className="w-2/3 border border-gray-300 p-2 rounded-lg">
                                <option>Rh o+</option>
                            </select>
                        </div>

                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">EPS:</label>
                            <select className="w-2/3 border border-gray-300 p-2 rounded-lg">
                                <option>Nueva EPS</option>
                            </select>
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Rol:</label>
                            <select className="w-2/3 border border-gray-300 p-2 rounded-lg">
                                <option>Docente / Estudiante</option>
                            </select>
                        </div>

                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Correo:</label>
                            <input type="email" defaultValue="Juan.concha@gmail.com" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>

                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Dirección:</label>
                            <input type="text" defaultValue="San José Calle 5 # 3-23" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <hr className="w-full mx-auto my-2 border-t border-black" />
                        <hr className="w-full mx-auto my-2 border-t border-black" />

                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Carrera:</label>
                            <input type="text" defaultValue="Ingeniería Informática" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Fecha Registro:</label>
                            <input type="date" defaultValue="2019-12-18" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>


                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Semestre:</label>
                            <input type="text" defaultValue="Séptimo semestre" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <br />
                        <hr className="w-full mx-auto my-2 border-t border-black" />
                        <hr className="w-full mx-auto my-2 border-t border-black" />


                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Nivel de Estudio:</label>
                            <select className="w-2/3 border border-gray-300 p-2 rounded-lg">
                                <option>Maestría</option>
                            </select>
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Fecha de Graduación:</label>
                            <input type="date" defaultValue="2019-12-18" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">N. Tarjeta Profesional:</label>
                            <input type="text" defaultValue="1245983569" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Cargo Postulación:</label>
                            <select className="w-2/3 border border-gray-300 p-2 rounded-lg">
                                <option>Base de datos</option>
                            </select>
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Título:</label>
                            <input type="text" defaultValue="Maestría en Ciencia de Datos" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <div className="form-group flex items-center">
                            <label className="block mb-1 w-1/3 font-bold text-2xl">Experiencia:</label>
                            <input type="text" defaultValue="3 Años 2 meses 5 días" className="w-2/3 border border-gray-300 p-2 rounded-lg" />
                        </div>
                        <hr className="w-full mx-auto my-2 border-t border-black" />
                        <hr className="w-full mx-auto my-2 border-t border-black" />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="bg-[#F6C944] text-black p-2 rounded hover:bg-yellow-600 flex items-center px-10">
                            Guardar
                        </button>
                    </div>
                </div>

                <div className="flex justify-center mt-6 col-start-5">
                    <div id="foto-container" className="p-6 bg-[#FCA311]/[0.0]">
                        <h3 className="text-lg font-bold mb-4 text-center">Foto de Usuario</h3>
                        <div className="flex flex-col items-center">
                            <img src="https://placehold.co/100x100" alt="User photo placeholder" className="w-24 h-24 rounded-full mb-2" />
                            <div className="font-bold mb-2">Foto</div>
                            <button className="bg-[#F6C944] text-black p-2 rounded hover:bg-yellow-600 flex items-center px-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V21h18v-4.5M12 3v12m0 0l-3-3m3 3l3-3" />
                                </svg>
                            </button>
                            <div className="font-bold">Estado</div>
                            <div className="font-bold text-green-600">Activo</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RegistroUsuarioNuevoAdmin;

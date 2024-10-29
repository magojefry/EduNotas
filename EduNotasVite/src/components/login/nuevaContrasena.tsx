const NuevaContrasena = () => {
    return (
      <>
      <div className="flex flex-col items-center justify-center min-h-screen h-full bg-gray-100">
        {/* Contenedor principal con color FCA311 y opacidad 14% */}
        <div
          className="flex flex-col md:flex-row max-w-5xl w-full shadow-lg rounded-lg overflow-hidden p-4"
          style={{ backgroundColor: 'rgba(252, 163, 17, 0.14)' }}
        >
          {/* Imagen de la universidad */}
          <div className="md:w-1/2 h-96 md:h-auto">
            <img
              src="/images/imagen1.png"
              alt="Unimayor"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Contenedor del formulario de cambio de contraseña con borde */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center h-full border-2 border-gray-300 rounded-lg bg-white">
            {/* Logo e información de acreditación */}
            <div className="text-center mb-6">
              <img src="/images/imagen2.jpg" alt="Acreditación" className="mx-auto mb-4" />
            </div>
  
  
  
            {/* Formulario */}
            <div className="p-6 border-2 border-gray-400 rounded-lg mb-6" style={{ borderWidth: '3px' }}>
              <form>
                {/* Título y descripción del cambio de contraseña */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Cambia tu contraseña</h2>
                  <p className="text-gray-600">
                    Una contraseña segura contribuye a evitar el acceso no autorizado a la cuenta unimayor
                  </p>
                </div>
                <div className="mb-4">
  
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
                    Nueva Contraseña
                  </label>
                  <input
                    id="new-password"
                    type="password"
                    placeholder="********"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                    style={{ borderWidth: '3px' }}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                    Confirmar Contraseña
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="********"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                    style={{ borderWidth: '3px' }}
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-lg font-bold text-white"
                    style={{ backgroundColor: '#74A1B5' }}
                  >
                    Cambiar Contraseña
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        {/* Texto informativo en la parte inferior */}
        <div className="mt-4 text-center text-gray-600 text-sm">
          <p>
            <strong>
              La Institución Universitaria Colegio Mayor del Cauca le informa que sus datos personales se encuentran incluidos en nuestras bases de datos con los debidos controles de seguridad y confidencialidad, por lo cual se le garantiza el adecuado tratamiento y uso de sus datos personales. Lo anterior para dar cumplimiento a los principios institucionales y a la Ley Estatutaria 1581 de 2012. En este entendido autorizo de manera libre, previa y voluntaria a la Institución Universitaria Colegio Mayor del Cauca, como responsables de los datos aquí suministrados, para fines de recolección, almacenamiento, tratamiento y actualización de la información, e invitación a eventos y/o actividades.
            </strong>
          </p>
          <p className="mt-2 font-bold">&copy; Copyright 2025</p>
        </div>
      </div>  
      </>
    )
  }
  export default NuevaContrasena
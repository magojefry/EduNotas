const LoginVolver = () => {
    return (
      <>
      
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFCC4D]">
          {/* Contenedor Principal */}
          <div className="relative flex flex-col md:flex-row max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden w-full h-auto">
            
            {/* Imagen de la institución */}
            <div className="md:w-1/2 h-96 md:h-auto">
              <img
                src="/images/imagen1.png" 
                alt="Institución Universitaria Colegio Mayor del Cauca"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Contenido de la sección de no encontrada */}
            <div className="relative md:w-1/2 p-8 flex flex-col justify-center h-full bg-[#FFF6E0]">
              {/* Logo de acreditación y texto */}
              <div className="text-center mb-4">
                <img
                  src="/images/imagen2.jpg" 
                  alt="Acreditación"
                  className="mx-auto"
                  style={{ width: '150px', height: 'auto' }}
                />
              </div>
  
              {/* Mensaje de error */}
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">No se encontró la cuenta</h3>
              <p className="text-sm text-gray-700 text-center mb-4">
                No se encontró ninguna Cuenta de Unimayor con la información que proporcionaste.
              </p>
  
              {/* Botón de volver */}
              <div className="flex justify-center">
                <button className="bg-blue-500 text-white w-32 py-2 rounded-md hover:bg-blue-600">
                  Volver
                </button>
              </div>
  
              {/* Logo inferior */}
              <div className="flex justify-center mt-4">
                <img
                  src="/images/imagen3.jpg" // Cambia esta ruta por la del logo de Unimayor
                  alt="Logo Unimayor"
                  className="h-16" // Ajusta el tamaño si es necesario
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
          </div>
  
          {/* Texto de privacidad */}
          <div className="max-w-4xl text-center text-gray-700 text-xs mt-4 px-4">
            <p>
              La Institución Universitaria Colegio Mayor del Cauca le informa que sus datos personales se encuentran incluidos en nuestras bases de datos 
              con los debidos controles de seguridad y confidencialidad, por lo cual se le garantiza el adecuado tratamiento y uso de sus datos personales.
            </p>
            <p className="mt-2">
              Lo anterior para dar cumplimiento a los principios Institucionales y a la Ley Estatutaria 1581 de 2012. En este entendido, autoriza de manera libre, 
              previa y voluntaria a la Institución Universitaria Colegio Mayor del Cauca, como responsables de los datos aquí suministrados, para fines de recolección, 
              almacenamiento, tratamiento y actualización de la información, e invitación a eventos y actividades.
            </p>
            <p className="mt-2 font-bold">@copyright 2025</p>
          </div>
  
          {/* Footer */}
          <footer className="text-center text-gray-700 text-xs mt-4 px-4">
            <p className="font-bold">Institución Universitaria Colegio Mayor del Cauca</p>
            <p>Versión 3.4.0 - © 2024</p>
          </footer>
        </div>  
      </>
    )
  }
  export default LoginVolver;
  
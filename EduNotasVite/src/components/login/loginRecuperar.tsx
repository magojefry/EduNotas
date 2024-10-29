

const LoginRecuperar = () => {
  return (
    <>
    
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Contenedor Principal */}
      <div className="relative flex flex-col md:flex-row max-w-full bg-white shadow-lg rounded-lg overflow-hidden w-full h-full">
        
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 h-96 md:h-auto">
          <img
            src="/images/imagen1.png" // Cambia esto por la URL de la imagen
            alt="Institución Universitaria Colegio Mayor del Cauca"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido del formulario y texto */}
        <div className="relative md:w-1/2 p-8 flex flex-col justify-center h-full bg-gray-50">
          
          {/* Logotipo e Información de Acreditación */}
          <div className="text-center mb-1">
            <img
              src="/images/imagen2.jpg" // Cambia por el logo real
              alt="Logo Unimayor"
              className="mx-auto mb-2"
              style={{ width: '500px', height: 'auto' }}
            />
          </div>

          {/* Formulario de Recuperación */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-gray-700 mb-4">Ingresa tu correo electrónico</h4>
            <input
              type="email"
              placeholder="@unimayor.edu.co"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <a> 
              <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600">
                Recuperar
              </button>
            </a>

            {/* Imagen amarilla debajo del botón */}
            <div className="flex justify-center mt-4">
              <img
                src="/images/imagen3.jpg" // Cambia esta ruta por la correcta
                alt="Imagen Amarilla"
                className="h-12" // Ajusta el tamaño si es necesario
                style={{ width: '100px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Texto legal en la parte inferior */}
          <div className="text-gray-600 text-xs mt-4">
            {/* Texto legal opcional aquí */}
          </div>
        </div>
      </div>

      {/* Copyright en el pie de página */}
      <footer className="text-center text-gray-500 mt-4">
        La Institución Universitaria Colegio Mayor del Cauca le informa que sus datos personales 
        se encuentran incluidos en nuestras bases de datos con los debidos controles de seguridad y confidencialidad, 
        por lo cual se le garantiza el adecuado tratamiento y uso de sus datos personales. 
        Lo anterior para dar cumplimiento a los principios Institucionales y a la Ley Estatutaria 1581 de 2012. 
        En este entendido, autoriza de manera libre, previa y voluntaria a la Institución Universitaria Colegio Mayor del Cauca, 
        como responsables de los datos aquí suministrados, para fines de recolección, almacenamiento, tratamiento y actualización 
        de la información, e invitación a eventos y actividades.
        
        ©Copyright 2025
      </footer>
    </div>  
    
    </>
  )
}
export default LoginRecuperar
const Acercade = () => {
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
  
            {/* Contenido de Acerca de */}
            <div className="relative md:w-1/2 p-8 flex flex-col justify-center h-full bg-[#FFF6E0]">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Acerca de</h2>
              <p className="text-sm text-gray-700 text-justify mb-6">
                La Institución Universitaria Colegio Mayor del Cauca se acoge a las directrices del Estado Colombiano para
                garantizar el derecho al acceso a la información pública, en este entendido, la Institución divulga a sus usuarios 
                y a la ciudadanía en general a través de su sección de Transparencia – MIPG los informes de la gestión realizada 
                frente al manejo de los recursos públicos. (Consultar la Ley 1712 del 6 de marzo de 2014).
              </p>
  
              {/* Logo de la institución */}
              <div className="flex justify-center mt-4">
                <img
                  src="/images/imagen2.jpg" // Cambia esta ruta por la del logotipo
                  alt="Logo Unimayor"
                  className="h-20" // Ajusta el tamaño si es necesario
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
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
  export default Acercade;
  
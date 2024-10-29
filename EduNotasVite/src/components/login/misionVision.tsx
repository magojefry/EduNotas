const MisionVision = () => {
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
  
            {/* Contenido de Misión y Visión */}
            <div className="relative md:w-1/2 p-8 flex flex-col justify-center h-full bg-[#FFF6E0]">
              {/* Títulos de Misión y Visión */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Misión</h2>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                Somos una institución universitaria pública, comprometida con el desarrollo regional, a través de la
                información integral de personas, donde el ser, saber y hacer se fundamentan en los principios de libertad, 
                convivencia, respeto a la vida, la diversidad y el medio ambiente.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Visión</h2>
              <p className="text-sm text-gray-700 text-justify">
                En el 2024, el Colegio Mayor del Cauca será reconocido como una institución de educación superior pública, 
                en camino a la acreditación institucional, posicionada por la pertenencia y el impacto social de sus programas 
                de alta calidad, en el ámbito territorial y nacional.
              </p>
            </div>
          </div>
  
          {/* Footer */}
          <footer className="text-center text-gray-700 text-xs mt-4 px-4">
            <p>
              Institución Universitaria Colegio Mayor del Cauca le informa que sus datos personales se encuentran incluidos en nuestras bases de datos 
              con los debidos controles de seguridad y confidencialidad, por lo cual se le garantiza el adecuado tratamiento y uso de sus datos personales.
            </p>
            <p className="mt-2">
              Lo anterior para dar cumplimiento a los principios Institucionales y a la Ley Estatutaria 1581 de 2012. En este entendido, autoriza de manera libre, 
              previa y voluntaria a la Institución Universitaria Colegio Mayor del Cauca, como responsables de los datos aquí suministrados, para fines de recolección, 
              almacenamiento, tratamiento y actualización de la información, e invitación a eventos y actividades.
            </p>
            <p className="mt-2 font-bold">© Institución Universitaria Colegio Mayor del Cauca - 2024</p>
          </footer>
        </div>  
      </>
    )
  }
  export default MisionVision;
  
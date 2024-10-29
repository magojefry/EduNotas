const Inicio = () => {
  return (
    <>

        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Contenedor Principal con opacidad */}
      <div className="relative flex flex-col md:flex-row max-w-full bg-[rgba(252,163,17,0.14)] shadow-lg rounded-lg overflow-hidden w-full h-full">
        {/* Imagen */}
        <div className="md:w-1/2 h-96 md:h-auto">
          <img
            src="/images/imagen1.png" // Cambia esto por la URL de la imagen que quieres mostrar
            alt="Bienvenido a Unimayor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido de bienvenida */}
        <div className="relative md:w-1/2 p-8 flex flex-col justify-center h-full">
          {/* Botón de Login en la parte superior derecha */}
          <a href="/horario" className="absolute top-0 right-0 bg-yellow-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-yellow-600 flex items-center">
            {/* Ícono SVG personalizado */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-5 h-5 mr-2">
              <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>
            Login
          </a>

          {/* Texto de bienvenida */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-12 text-center">
            Bienvenido a Unimayor
          </h1>
          <p className="text-gray-600 mb-4 text-center font-bold">
            ¡Nos alegra tenerte aquí! En la universidad colegio mayor del cauca,
            somos una institución dedicada a promover el desarrollo integral y el
            empoderamiento de nuestra comunidad. A través de programas educativos,
            culturales y sociales, buscamos fomentar el crecimiento personal y colectivo.
          </p>
          <p className="text-gray-600 text-center font-bold">
            Explora nuestro sitio para conocer más sobre nuestros programas, eventos
            y cómo puedes formar parte de nuestra comunidad. ¡Juntos podemos lograr
            grandes cosas!
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Inicio;
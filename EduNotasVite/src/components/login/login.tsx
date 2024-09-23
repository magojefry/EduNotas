const Login = () => {
  return (
    <>
    
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <img className="absolute inset-0 " src="https://unimayor.edu.co/web/images/edificio-bicentenario.jpg" alt="Imagen de la institucion" />
        
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Inicia sesión</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Acceda a su cuenta para comenzar.</p>
        <div className="relative mb-4">
          <label  className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Sing In</button>
        <p className="text-xs text-gray-500 mt-3">Derechos reservados por la universidad colegio mayor del Cauca.</p>
      </div>
    </div>
</section>

</>
  )
}
export default Login;
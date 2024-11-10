const FooterL = () => {
  return (
    <footer className="bg-indigo-500 text-white py-2 w-full">
        <div className="grid grid-flow-row-dense grid-cols-3 ">
          <div className="flex justify-center">
            <div className="flex-none w-48 relative scale-75 absolute inset-0">
              <img src="./images/imagen3.jpg" alt="Logo Unimayor" className="w-16 md:w-32 lg:w-48" />
            </div>
          </div>
          <div className="flex justify-center relative" >
                <p className="font-sans text-sm absolute bottom-0">
                &copy; 2024
                </p>
          </div>
          <div className="flex justify-center relative">
              <p className="font-sans text-sm absolute bottom-0">
                Institucion Universitaria Colegio Mayor del Cauca
              </p>
          </div>
        </div>
    </footer>
  )
}

export default FooterL;
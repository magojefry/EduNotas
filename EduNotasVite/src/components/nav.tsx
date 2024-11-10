const NavbarL = () => {
    return (
        <nav className="bg-indigo-500 text-white w-64 min-h-screen p-4">
            <ul className="space-y-4">
                <li><a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800">Inicio</a></li>
                <li><a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800">Servicios</a></li>
                <li><a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800">Acerca de</a></li>
                <li><a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default NavbarL;
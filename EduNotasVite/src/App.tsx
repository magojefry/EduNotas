{/*import Acercade from "./components/login/acercade";
import Inicio from "./components/login/inicio";
import Login from "./components/login/login";
import LoginRecuperar from "./components/login/loginRecuperar";
import MisionVision from "./components/login/misionVision";
import NuevaContrasena from "./components/login/nuevaContrasena";
import Pruebas from "./components/pruebas";
import ActualizarUsuarioAdmin from "./components/rol_administrador/actualizarUsuarioAdmin";
import MatricularMateriaAdmin from "./components/rol_administrador/matricularMateriaAdmin";
import RegistroMateriaAdmin from "./components/rol_administrador/registroMateriaAdmin";
import RegistroUsuarioNuevoAdmin from "./components/rol_administrador/registroUsuarioNuevoAdmin";
import VerListaUsuariosAdmin from "./components/rol_administrador/verListaUsuariosAdmin";
import HorarioEstudiante from "./components/rol_estudiante/horarioEstudiante";
import VerNotasFaltasEstudiante from "./components/rol_estudiante/verNotasFaltasEstudiante";
import HorarioProfesor from "./components/rol_profesor/horarioProfesor";
import InformeProfesor from "./components/rol_profesor/generarInfomeProfesor";
import RegistroNotasFaltasProfesor from "./components/rol_profesor/registroNotasFaltasProfesor";
import LoginVolver from "./components/login/loginVolver";


*/}
import React, { useState } from 'react';
import FooterL from "./components/footer";
import HeaderL from "./components/header";
import Pruebas from "./components/pruebas";
import NavbarL from "./components/nav";
function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);

  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderL toggleNavVisibility={toggleNavVisibility} />
        <div className="flex flex-1 relative">
          {isNavVisible && (
            <div className="absolute inset-y-0 left-0 w-64 transition-transform duration-300 transform ${isNavVisible ? 'translate-x-0' : '-translate-x-full'}">
              <NavbarL />
            </div>)}
          <div className={`flex-grow p-4 transition-all duration-300 ${isNavVisible ? 'ml-64' : 'ml-0'}`}>
            <Pruebas />
          </div>
        </div>
        <FooterL />
      </div>

      {/*Rol Login Entregado
      <Inicio/>
      <Login/>
      <LoginRecuperar/>
      <NuevaContrasena/>*/}

      {/*Tarde
      <Acercade/>
      <MisionVision/>
      <LoginVolver/>
      */
      }


      {/*
      Rol Profesor entregado
      <InformeProfesor/>
      <HorarioProfesor/>
      <RegistroNotasFaltasProfesor/>
      */}

      {/*
      Rol Estudiante entregado
      <VerNotasFaltasEstudiante/>
      <HorarioEstudiante/>
      */}

      {/*
      Rol Admin entregado
      <RegistroMateriaAdmin/>
      <MatricularMateriaAdmin/>
      <VerListaUsuariosAdmin/>
      <ActualizarUsuarioAdmin/>
      <RegistroUsuarioNuevoAdmin/>
      */}
    </>
  )
}
export default App;

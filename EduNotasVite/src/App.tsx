import Acercade from "./components/login/acercade";
import Inicio from "./components/login/inicio";
import Login from "./components/login/login";
import LoginRecuperar from "./components/login/loginRecuperar";
import MisionVision from "./components/login/misionVision";
import NuevaContrasena from "./components/login/nuevaContrasena";
import { Pruebas } from "./components/pruebas";
import ActualizarUsuarioAdmin from "./components/rol_administrador/actualizarUsuarioAdmin";
import MatricularMateriaAdmin from "./components/rol_administrador/matricularMateriaAdmin";
import {RegistroMateriaAdmin} from "./components/rol_administrador/registroMateriaAdmin";
import RegistroUsuarioNuevoAdmin from "./components/rol_administrador/registroUsuarioNuevoAdmin";
import VerListaUsuariosAdmin from "./components/rol_administrador/verListaUsuariosAdmin";
import HorarioEstudiante from "./components/rol_estudiante/horarioEstudiante";
import VerNotasFaltasEstudiante from "./components/rol_estudiante/verNotasFaltasEstudiante";
import HorarioProfesor from "./components/rol_profesor/horarioProfesor";
import InformeProfesor from "./components/rol_profesor/generarInfomeProfesor";
import RegistroNotasFaltasProfesor from "./components/rol_profesor/registroNotasFaltasProfesor";
import LoginVolver from "./components/login/loginVolver";

function App () {
  return (
    <>
      {/*
      Rol Login Entregado
      <Inicio/>
      <Login/>
      <LoginRecuperar/>
      <NuevaContrasena/>

      Tarde
      <Acercade/>
      <MisionVision/>
      <LoginVolver/>
      */}


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
      <Pruebas/>
      <RegistroMateriaAdmin/>
      
    </>
  )
}
export default App;

import Epilogo from "./components/registro_notas_grupo/epilogo"
import Header from "./components/registro_notas_grupo/header"
import Svg_registro_notas_grupo from "./components/registro_notas_grupo/svg_notas_grupo"
import MatricularMateria from './components/registrar_materia/matricularMateria';
import Tabla_registro_notas_grupo from "./components/registro_notas_grupo/tabla_registro_notas grupo"
import Tabla_registro_notas from "./components/registro_notas/tabla_registro_notas"
import Login from "./components/login/login";
import Menu_registro_docente from "./components/menu_regist/menu_registro_docente"

function App() {
  return (
    <>
      {/* Se comenta con el fin de a futuro crear la plantilla para espaciar cada proyecto
      <Header/>
      <Svg_registro_notas_grupo/>
      <Tabla_registro_notas_grupo/>
      <Epilogo/>
      */}

      {/*
      <Header/>
      <Tabla_registro_notas/>  
      <Epilogo/>
      */}

      {/*<Login/>
        <Epilogo/>
        */}

      <Header></Header>

      <MatricularMateria />
      <Epilogo />

    </>
  )
}
export default App;

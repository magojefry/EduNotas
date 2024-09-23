import Epilogo from "./components/registro_notas_grupo/epilogo"
import Header from "./components/registro_notas_grupo/header"
{/*import Svg_registro_notas_grupo from "./components/registro_notas_grupo/svg_notas_grupo"
import Tabla_registro_notas_grupo from "./components/registro_notas_grupo/tabla_registro_notas grupo"*/}
import Tabla_registro_notas from "./components/registro_notas/tabla_registro_notas"

function App () {
  return (
    <>
      <Header/>
      {/*<Svg_registro_notas_grupo/>
      <Tabla_registro_notas_grupo/>*/}
      <Tabla_registro_notas/>  
      <Epilogo/>
    </>
  )
}
export default App;

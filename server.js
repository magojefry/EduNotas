import express from "express";
import cors from "cors";
import pg from "pg";

const { Pool } = pg;

const app = express();
const pool = new Pool({
  user: "postgres", // Cambia esto por tu usuario de PostgreSQL
  host: "localhost", // Host de la base de datos
  database: "NotasDB", // Nombre de la base de datos
  password: "1234",
  port: 5432, // Puerto predeterminado de PostgreSQL
});

app.use(cors());
app.use(express.json());

// Buscar estudiante por nombre
app.get("/buscar-estudiante/:nombre", async (req, res) => {
  const { nombre } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM estudiantes WHERE nombre = $1",
      [nombre]
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: "Estudiante no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agregar una materia para un estudiante
app.post("/agregar-materia", async (req, res) => {
  const { estudianteId, nombreMateria } = req.body;
  try {
    await pool.query(
      "INSERT INTO materias (estudiante_id, nombre_materia) VALUES ($1, $2)",
      [estudianteId, nombreMateria]
    );
    res.status(200).json({ message: "Materia agregada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});

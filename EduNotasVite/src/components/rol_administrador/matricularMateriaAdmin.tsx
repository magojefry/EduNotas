import { useState } from "react";

const MatricularMateriaAdmin = () => {
    const [studentName, setStudentName] = useState("");
    const [studentData, setStudentData] = useState({
        programa: "Ingeniería Informática",
        codigo: "123456789",
        semestre: "Quinto",
        apellido: "Benites Majín",
        creditosMatriculados: 16,
        materiasAprobadas: 52,
        materiasPerdidas: 2
    });

    const handleBuscarAlumno = async () => {
        try {
            const response = await fetch(`http://localhost:3001/buscar-estudiante/${studentName}`);
            if (response.ok) {
                const data = await response.json();
                setStudentData(data);
            } else {
                console.error('Estudiante no encontrado');
            }
        } catch (error) {
            console.error('Error al buscar el estudiante', error);
        }
    };

    return (
        <div className="container mx-auto mt-5 p-5">
            { }
            <h1 className="text-2xl font-bold text-center mb-5">Matricular Materia</h1>
            <div className="grid grid-cols-3 gap-4 mb-4 items-center">
                <div className="col-span-2">
                    <label className="block font-semibold">Nombres:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleBuscarAlumno}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Buscar Alumno
                    </button>
                </div>
            </div>

            { }
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block font-semibold">Programa:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full bg-gray-100"
                        value={studentData.programa}
                        disabled
                    />
                </div>
                <div>
                    <label className="block font-semibold">Apellidos:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full bg-gray-100"
                        value={studentData.apellido}
                        disabled
                    />
                </div>
                <div className="flex justify-center">
                    <img

                        className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                    />
                </div>
            </div>

            { }
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block font-semibold">Código:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full bg-gray-100"
                        value={studentData.codigo}
                        disabled
                    />
                </div>
                <div>
                    <label className="block font-semibold">Créditos Matriculados:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full bg-gray-100"
                        value={studentData.creditosMatriculados}
                        disabled
                    />
                </div>
                <div>
                    <label className="block font-semibold">Semestre:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full bg-gray-100"
                        value={studentData.semestre}
                        disabled
                    />
                </div>
            </div>

            { }
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block font-semibold">Materias Aprobadas:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full bg-gray-100"
                        value={studentData.materiasAprobadas}
                        disabled
                    />
                </div>
                <div>
                    <label className="block font-semibold">Materias Perdidas:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-full bg-gray-100"
                        value={studentData.materiasPerdidas}
                        disabled
                    />
                </div>
                <div className="flex gap-4">
                    <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                        Guardar
                    </button>
                    <button className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
                        Actualizar
                    </button>
                </div>
            </div>

            { }
            <div className="mt-8">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Materias</th>
                            <th className="border border-gray-300 p-2">Horario</th>
                            <th className="border border-gray-300 p-2">Créditos</th>
                            <th className="border border-gray-300 p-2">Semestre</th>
                            <th className="border border-gray-300 p-2">Agregar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">Electiva II</td>
                            <td className="border border-gray-300 p-2">Martes 7 a 10 AM</td>
                            <td className="border border-gray-300 p-2">3</td>
                            <td className="border border-gray-300 p-2">4</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <button className="bg-yellow-400 text-white px-2 py-1 rounded-full">+</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Mercadeo</td>
                            <td className="border border-gray-300 p-2">Lunes 2 a 5 PM</td>
                            <td className="border border-gray-300 p-2">3</td>
                            <td className="border border-gray-300 p-2">5</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <button className="bg-yellow-400 text-white px-2 py-1 rounded-full">+</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Mercadeo</td>
                            <td className="border border-gray-300 p-2">Lunes 2 a 5 PM</td>
                            <td className="border border-gray-300 p-2">3</td>
                            <td className="border border-gray-300 p-2">5</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <button className="bg-yellow-400 text-white px-2 py-1 rounded-full">+</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Mercadeo</td>
                            <td className="border border-gray-300 p-2">Lunes 2 a 5 PM</td>
                            <td className="border border-gray-300 p-2">3</td>
                            <td className="border border-gray-300 p-2">5</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <button className="bg-yellow-400 text-white px-2 py-1 rounded-full">+</button>
                            </td>
                        </tr>
                        { }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MatricularMateriaAdmin;
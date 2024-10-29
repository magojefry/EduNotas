import React, { useState, useCallback, memo } from "react";

type User = {
    code: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    status: string;
  };


const VerListaUsuariosAdmin = () => {
    const [searchValue, setSearchValue] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users: User[] = [
    {
      code: "6789012345",
      name: "Juan Andrés Pérez Gómez",
      email: "juan.perez@unimayor.edu.co",
      phone: "300-123-4567",
      role: "Estudiante",
      status: "Activo",
    },
    {
      code: "6789012346",
      name: "María Fernanda López Castillo",
      email: "maria.lopez@unimayor.edu.co",
      phone: "300-234-5678",
      role: "Docente",
      status: "Activo",
    },
    // Otros usuarios...
  ];

  const handleSearch = useCallback(() => {
    const user = users.find((u) => u.code === searchValue);
    setSelectedUser(user || null);
  }, [searchValue, users]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value),
    []
  );

  const TableRow = memo(({ user }: { user: User }) => (
    <tr>
      <td className="p-3 border">{user.code}</td>
      <td className="p-3 border">{user.name}</td>
      <td className="p-3 border">{user.email}</td>
      <td className="p-3 border">{user.phone}</td>
      <td className="p-3 border">{user.role}</td>
      <td className="p-3 border">{user.status}</td>
    </tr>
  ));


    return ( 
        <>

<div className="bg-blue-600 text-white p-5 mb-3 relative rounded-md shadow-md">
        <div className="text-left leading-6 font-bold">
          <h3>Nombre: {selectedUser?.name || ""}</h3>
          <h3>Correo: {selectedUser?.email || ""}</h3>
          <h3>Teléfono: {selectedUser?.phone || ""}</h3>
          <h3>Rol: {selectedUser?.role || ""}</h3>
          <h3>Estado: {selectedUser?.status || ""}</h3>
        </div>

        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex space-x-3">
          <button className="bg-yellow-500 text-white font-bold py-2 px-3 rounded hover:bg-yellow-600 transition">
            Crear Usuario
          </button>
          <button className="bg-yellow-500 text-white font-bold py-2 px-3 rounded hover:bg-yellow-600 transition">
            Actualizar
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <input
          type="text"
          placeholder="Buscar Usuario"
          value={searchValue}
          onChange={handleSearchChange}
          className="p-2 rounded border border-gray-300 mr-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white font-bold py-2 px-3 rounded hover:bg-blue-600 transition">
          Buscar
        </button>
      </div>

      <table className="w-full border-collapse mt-5 shadow-md">
        <thead>
          <tr>
            <th className="bg-yellow-500 text-white font-bold p-3">Código</th>
            <th className="bg-yellow-500 text-white font-bold p-3">Nombres y Apellidos</th>
            <th className="bg-yellow-500 text-white font-bold p-3">Correo Electrónico</th>
            <th className="bg-yellow-500 text-white font-bold p-3">Teléfono</th>
            <th className="bg-yellow-500 text-white font-bold p-3">Rol Usuario</th>
            <th className="bg-yellow-500 text-white font-bold p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={index} user={user} />
          ))}
        </tbody>
      </table>




        </>
    );
};

export default VerListaUsuariosAdmin;
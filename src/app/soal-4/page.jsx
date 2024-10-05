"use client";

//  DIGUNAIN KETIKA MENGGUNAKAN LOADING UI NEXT JS FETCH SERVER SIDE -----------------------------------
// async function getUsers() {
//   // Menambahkan delay buatan
//   await new Promise(resolve => setTimeout(resolve, 2000));
  
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users",
//     {
//       cache: "no-store",
//     }
//   );
  
//   return response.json();
// }

// export default async function UsersPage() {
//   const users = await getUsers();

import React, { useEffect, useState } from "react";

const UsersPage = () => {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-10 p-2 bg-cyan-500 rounded-md text-white">User List</h1>
      {loading ? ( 
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">
            Loading...
          </h2>
          <p className="text-gray-500 mt-2">Please wait a moment</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-700">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> {user.website}
              </p>
              <p className="text-gray-700">
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;

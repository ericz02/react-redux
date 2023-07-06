import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl mb-8">CRUD App using JSON Server</h2>

      <Link to={"/create"}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-8">
          Create +
        </button>
      </Link>

      <table className="w-full">
        <thead>
          <tr>
            <th className="border py-2 px-4 text-left">ID</th>
            <th className="border py-2 px-4 text-left">Name</th>
            <th className="border py-2 px-4 text-left">Email</th>
            <th className="border py-2 px-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border py-2 px-4">{user.id}</td>
              <td className="border py-2 px-4">{user.name}</td>
              <td className="border py-2 px-4">{user.email}</td>
              <td className="border py-2 px-4">
                <Link to={`/edit/${user.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Edit
                  </button>
                </Link>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

import { useSelector } from "react-redux";

const Home = () => {
  const users = useSelector((state) => state.users);
  console.log(users)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl  mb-8">CRUD App using JSON Server</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">
        Create +
      </button>

      <table className="w-full">
        <thead>
          <tr>
            <th className="border py-2 px-4">ID</th>
            <th className="border py-2 px-4">Name</th>
            <th className="border py-2 px-4">Email</th>
            <th className="border py-2 px-4">Action</th>
          </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
    </div>
  );
};

export default Home;

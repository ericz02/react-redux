import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { updateUser } from "./UserReducer";

const Update = () => {

  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const{ name, email } = existingUser[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white rounded shadow p-10 max-w-xl w-full">

        <h1 className="text-2xl text-gray-800 mb-5 font-bold">Update User</h1>

        <form onSubmit={handleUpdate}>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-800 text-lg"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-input mt-1 block w-full text-lg"
              placeholder="Enter name"
              value={uname}
              onChange={e => setName(e.target.value)}
              />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 text-lg"
              >
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="form-input mt-1 block w-full text-lg"
              placeholder="Enter email"
              value={uemail}
              onChange={e => setEmail(e.target.value)}
              />
          </div>

          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update;
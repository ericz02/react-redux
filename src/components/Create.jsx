import { useState } from 'react';
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
    navigate('/')
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white rounded shadow p-10 max-w-xl w-full">

        <h1 className="text-2xl text-gray-800 mb-5 font-bold">Add New User</h1>

        <form onSubmit={handleSubmit}>

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
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

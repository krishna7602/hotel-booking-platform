import React, { useState } from 'react'
import {UserDataContext} from '../context/UserContext.jsx'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'

const Login =  () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({})

  const {user,setUser}=React.useContext(UserDataContext)
  const navigate=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userData={
        email: email,
        password: password
    }

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/login`,userData)

    if(response.status===200){
        console.log(response.data)
        const data=response.data
        setUser(data.user)
        localStorage.setItem('token',data.token)
        navigate('/home')
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://www.pngall.com/wp-content/uploads/5/Hotel-Building-PNG-Free-Image.png')" }}>
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-black text-center">
                    Hotel <span className="italic">Dekho</span>
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Log In
                        </button>
                        <Link
                            to="/signin"
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        >
                            New Here? Sign Up 
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login

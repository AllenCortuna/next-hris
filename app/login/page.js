"use client"
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role) => {
    // Add your login logic here
    console.log(`Logging in as ${role} with username: ${username} and password: ${password}`);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100'>
      <h1 className='text-2xl font-bold mb-5 text-zinc-700'>Login</h1>
      <div className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='custom-input p-3 rounded-md'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='custom-input p-3 rounded-md'
        />
        <button
          onClick={() => handleLogin('Admin')}
          className='custom-input p-3 rounded-md bg-blue-500 text-white hover:bg-blue-600'
        >
          Admin Login
        </button>
        <button
          onClick={() => handleLogin('Employee')}
          className='custom-input p-3 rounded-md bg-green-500 text-white hover:bg-green-600'
        >
          Employee Login
        </button>
      </div>
    </div>
  );
};

export default Login;
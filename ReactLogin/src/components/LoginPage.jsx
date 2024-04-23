import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = () => {
    // In a real application, you would typically send a request to the server to authenticate the user
    // For this example, let's simulate a successful login with hardcoded credentials
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Simulate successful login by storing user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Redirect to account settings page after successful login
      history.push('/account-settings'); // Use push method instead of directly invoking history
    } else {
      // Show error message for invalid credentials
      alert('Invalid email or password');
    }
    
  };

  return (
    <div className=' flex justify-center items-center h-screen bg-white'>
      <div className=' w-96  shadow-lg border-4  h-screen bg-white rounded-lg border-gray-300'>
      <h2 className=' text-3xl m-3'>Log in to your popx account</h2>
      <p className=' m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga temporibus eius quasi dignissimos repellat cupiditate veniam, velit error? Voluptate?</p>
      <div  className="relative m-3">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required id="floating_outlined" className="block border px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-600 appearance-none  text-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   />
        <label htmlFor="email" className="absolute text-blue-600 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>       
       

      </div>
      <div  className="relative m-3">
      <input required  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} id="floating_outlined" className="block border px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-600 appearance-none  text-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   />
        <label htmlFor="password" className="absolute text-blue-600 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>   

      </div>
      <div className='  m-10 p-2  text-center rounded-md'>
      <Link   to="/account-settings">
        <button className='bg-violet-700 rounded-md w-full p-2 text-white' onClick={handleLogin}>Login</button>
      </Link>
      </div>

      </div>
      
    </div>
  );
};

export default LoginPage;

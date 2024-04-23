import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(false);
  const history = useNavigate();

  const handleRegister = () => {
    // Simulate registration logic by storing user data in localStorage
    const userData = {
      name,
      email,
      password,
      companyName,
      isAgency
    };

    // Check if user data already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    if (existingUsers.some(user => user.email === email)) {
      alert('Email is already registered.');
      return;
    }

    // Add the new user data to existing users
    const updatedUsers = [...existingUsers, userData];

    // Store the updated users data in localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Navigate to the login page after successful registration
    history('/login');
  };

  return (
    <div className=' flex justify-center items-center h-screen '>
      <div className=' w-96 shadow-xl border-4 h-screen bg-white rounded-lg border-gray-300'>
        <h2 className='  text-3xl m-3'>Create your <br></br> PopX Account</h2>
        <hr />
       
        <div className='relative m-3 '>
        <input id="floating_outlined" className="block border px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-600 appearance-none  text-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="" required value={name} onChange={(e) => setName(e.target.value)}  />
        <label htmlFor="name" className=" select-none absolute text-blue-600 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>       
        </div>
        <div className=' relative m-3'>
        <input type="phone" placeholder='' id="floating_outlined" className="block border px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-600 appearance-none  text-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required  />
        <label htmlFor="phone" className="select-none absolute text-blue-600 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Phone Number</label>       

        </div>
        <div className=' relative m-3'>
        <input type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} required id="floating_outlined" className="block border px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-600 appearance-none  text-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   />
        <label htmlFor="email" className="select-none absolute text-blue-600 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>       

        </div>
        <div className=' relative m-3'>
        <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} id="floating_outlined" className="block border px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-600 appearance-none  text-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   />
        <label htmlFor="password" className="select-none absolute text-blue-600 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>   


        

        </div>
        <div className=" relative m-3">
        <input type="text" placeholder="" value={companyName} onChange={(e) => setCompanyName(e.target.value)} id="floating_outlined" className="block border px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-600 appearance-none  text-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   />
        <label  htmlFor="ComPany" className="select-none absolute text-blue-600 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Company</label>   

        </div>
      <div className=' m-3'>
      <label>
        Are you in an agency? 
        <br />
        <ul className='flex justify-around' >
          <li> <input  type="radio" name="agency" value="yes" checked={isAgency} onChange={() => setIsAgency(true)} /> Yes</li>
          <li> <input className=' pl-2' type="radio" name="agency" value="no" checked={!isAgency} onChange={() => setIsAgency(false)} /> No</li>
        </ul>
       
       
      </label>

      </div>
    
      <div className='m-10 p-2  text-center rounded-md'>
      <Link   to="/login">
        <button onClick={handleRegister} className='rounded-md w-full p-2 bg-violet-700 text-white '>Create Account</button>
      </Link>

      </div>
    
        
      </div>

    </div>
  );
};

export default RegisterPage;

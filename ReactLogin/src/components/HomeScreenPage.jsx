import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreenPage = () => {
  return (
    <div className=' h-screen bg-white w-screen flex justify-center items-center  no-scrollbar'>
      <div className='  bg-white h-screen  m-3  w-96 rounded-lg border-4 border-gray-300'>
        <div className= ' mt-40 pt-20 bg-white m-3'>
        <h1 className=' text-center text-3xl  font-bold'>Welcome to popX</h1>
        <div className='bg-white text-gray-500 ml-5 h-80 w-80 justify-end  items-end flex text-left'>
        <p className=' pr-3 pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim quidem et nulla culpa beatae itaque fugit amet ea eius.</p>

        </div>
        

        </div>
    
      <div className='  bg-white p-4 flex flex-col  max-h-svh   '>
        <div className=' text-center rounded-md'>
        <Link className='text-sm' to="/register">
        <button className='bg-violet-700 rounded-md w-full p-2 text-white' > Create Account</button>
         </Link>

        </div>
        <hr />
        <div className='  text-center rounded-md'> 
        <Link className=' text-sm' to="/login">
          <button className='bg-violet-700 rounded-md w-full p-2 text-white mt-1'> Already Registered? Login</button>
         </Link>


        </div>
     
     
      </div>

      
     

      </div>
      
    </div>
  );
};

export default HomeScreenPage;

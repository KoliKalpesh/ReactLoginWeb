import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountSettingsPage = () => {
  
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

  const handleLogout = () => {
    
    localStorage.removeItem('currentUser');
    
    setCurrentUser(null);
  };
  

  return (
    <div className='flex justify-center items-center h-screen  bg-white'>
      <div className='w-96  h-screen bg-white rounded-lg   shadow-xl border-4 border-gray-300'>
        <h1 className='text-3xl m-3'>Account Settings <hr className=' border-2 mt-2' /></h1>
        {currentUser && (
          <div>
            <div className='flex '>
            <div className="relative m-3">
    <img className="w-150 h-150 rounded-full" src="https://via.placeholder.com/100" alt="" />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" fill-white absolute bottom-0  right-1 transform translate-y-1/3 w-5 h-5 bg-violet-600 rounded-full p-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>

    
    {/* <span className="absolute bottom-0  right-1 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
</div>
              <div className='ml-1'>
                <p className=' font-bold'>Name: {currentUser.name}</p>
                <p>Email: {currentUser.email}</p>
              </div>
            </div>
            <div className='m-3'>
              <p className=' font-bold'>Description</p>
              <p>Company Name: {currentUser.companyName}</p>
              <p>Is in Agency: {currentUser.isAgency ? 'Yes' : 'No'}</p>
            </div>
            <div className="logout m-3 flex justify-center items-center">
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Logout</button>
            </div>
          </div>
        )}
        {!currentUser && <p className=' text-center'>Please <Link className=' text-red-400' to="/login">log</Link> in to view account settings.</p>}
      </div>
    </div>
  );
};

export default AccountSettingsPage;

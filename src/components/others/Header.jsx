import React from 'react';

const Header = (props) => {
  // console.log(props.data.name)
  

  
  const logOutUser = ()=>{
    localStorage.setItem("loggedInUser" , "")
    // window.location.reload(); 
    props.changeUser("")
  }
  return (
    <header className='flex items-end justify-between p-4 relative'>
      <h1 className='text-2xl font-medium left-0'>
        Hello <br />
        <span className='text-3xl font-semibold'>{props.data.name}👋</span>
        
      </h1>
      <button 
      onClick={logOutUser}
        className='bg-red-500 text-white px-4 py-2 rounded-sm font-medium hover:bg-red-600 transition'
        aria-label='Log Out'
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;

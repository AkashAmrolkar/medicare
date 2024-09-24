import React from 'react'

const Logout = () => {

    const accessToken = localStorage.getItem('token');
    console.log(accessToken);
  return (
    <div>Logout</div>
  )
}

export default Logout
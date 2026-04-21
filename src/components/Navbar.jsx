import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>CreditConcierge</h1>
      
      <div className="nav-links">
        <button>Compare</button>
        <button className='active'>Offers</button>
      </div>

      <div className="icons">
        <i className="fa-solid fa-bell"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  )
}

export default Navbar

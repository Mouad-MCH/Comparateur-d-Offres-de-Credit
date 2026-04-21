import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>CreditConcierge</h1>
      
      <div className="nav-links">
        <button>Compare</button>
        <button>Offers</button>
      </div>

      <div className="icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../constants'

const Navbar = () => {
  return (
    <div className="container pt-2 d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Link to={'/'}>
       <img src={logo} alt="" height={100}/>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={'/login'} className="me-3 py-2 link-body-emphasis text-decoration-none">login</Link>
        <Link to={'/register'} className="me-3 py-2 link-body-emphasis text-decoration-none" >register</Link>
      </nav>
    </div>
  )
}

export default Navbar
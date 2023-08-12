import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Header>
      <NavLink to="/">
        <img src="./images/logo/logo.png" alt="logo" />
      </NavLink>
      <Navbar />
    </Header>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Header>
      <NavLink to="/">
        <img src="./images/logo/logo.png" alt="logo" />
      </NavLink>
    </Header>
  )
}

export default Header
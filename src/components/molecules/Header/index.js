import React from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const navigateLogout = () => {
    navigate('/login')
  }
  return (
    <div className="header">
      <p className="logo-app">MERN-Blog</p>
      <p className="menu-item" onClick={navigateLogout} >Logout</p>
    </div>
  )
}

export default Header

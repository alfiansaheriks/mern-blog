import React from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'
import { IkonAkun, IkonLogout } from '../../../assets';

const Header = () => {
  const navigate = useNavigate();
  const navigateLogout = () => {
    navigate('/login')
  }
  return (
    <div className="header">
      <p className="logo-app">MERN-Blog</p>
      <img className="menu-item" src={IkonAkun} />
    </div>
  )
}

export default Header

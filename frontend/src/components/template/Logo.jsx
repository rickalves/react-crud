import './Logo.css'
import React from 'react'
import logo from '../../assets/images/generic-logo.png'
import { Link } from 'react-router-dom'

export default props => 
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
   
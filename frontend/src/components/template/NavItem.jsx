import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={`${props.link}`} className='nav-link'>
        <i className={`fas fa-${props.icon} mx-2`}></i>{props.label}
    </Link>
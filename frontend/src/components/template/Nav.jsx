import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className='nav'>
            <NavItem link="/" label="Início" icon="home" />
            <NavItem link="/users" label="Usuarios" icon="users" /> 
        </nav>
    </aside>
import './Header.css'
import React from 'react'

import Logo from './Logo'

export default props =>
    <header className="header d-none d-sm-flex">
        <Logo />
        <div>
            <h1 className="mt-3 h3">
                <i className={`fas fa-${props.icon} mx-2`}></i>{props.title}
            </h1>
            <p className="lead text-light">{props.subtitle}</p>
        </div>

    </header>
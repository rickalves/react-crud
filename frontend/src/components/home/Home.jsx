import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'home',
    title: 'Início',
    subtitle: 'Página principal da aplicação.',
}

export default props =>
    <Main {...headerProps}>
        <div className="display-6">Bem vindo!</div>
        <hr className='mt-1' />
        <p className='mb-0'>Sistema de cadastros de usuários desenvolvido em ReactJS.</p>
    </Main >

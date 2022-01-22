import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'home',
    title: 'Início',
    subtitle: 'Página principal',
}

export default props =>
    <Main {...headerProps}>
        <div className="display-6">Bem vindo!</div>
        <hr className='mt-1' />
        <h4>O que é essa aplicação?</h4>
        <p className='mb-0'>Sistema de cadastros de usuários desenvolvido seguindo o padrão REST.</p>
        <h4 className='my-2'>O que há no backend?</h4>
        <p className='mb-0'> No backend da aplicação está sendo usado uma API Rest Fake, o JSON-Server e o Axios.</p>
        <h4 className='my-2'>O que há no frontend?</h4>
        <p className='mb-0'>O frontend foi desenvolvido usando a Lib ReactJS, Bootstrap 5 e Awesome-font. </p>
        
    </Main >

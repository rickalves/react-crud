import React, { Component } from "react";
import Main from "../template/Main";
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários',
}

const baseUrl ='http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class Users extends Component {
    state = { ...initialState }
    componentWillMount(){
        axios(baseUrl)
            .then(resp => {
                this.setState( {list: resp.data} )
            })
    }

    clear(){
        this.setState({ user: initialState.user })
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState.user, list})
            })
    }

    getUpdateList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(e){
       const user = { ...this.state.user } 
       user[e.target.name] = e.target.value
       this.setState({ user })
    }

    renderForm(){
       return (
           <div className="form">
               <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label>Nome:</label>
                            <input type="text" className="form-control " name="name" 
                                placeholder="Digite seu nome..." value={this.state.user.name} 
                                onChange={e => this.updateField(e)} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 my-3 my-md-0">
                        <div className="form-group">
                            <label>E-mail:</label>
                            <input type="email" className="form-control" name="email" 
                                placeholder="Digite seu e-mail..." value={this.state.user.email} 
                                onChange={e => this.updateField(e)} />
                        </div>
                    </div>
               </div>
               <hr />
               <div className="row">
                   <div className="col-12 d-flex justify-content-end">
                       <button className="btn btn-primary" 
                        onClick={e => this.save(e)} name="btnSave">Salvar</button>
                       <button className="btn btn-secondary mx-2" 
                        onClick={e => this.clear(e)} name="btnCancel">Cancelar</button>
                   </div>
               </div>
           </div>
       ) 
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.getUpdateList(user, false)
                this.setState({ list })
            })
    }

    renderTable(){
        return (
            <table className="table table-dark table-striped my-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                   {this.renderRows()}
                </tbody>
  
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-success" 
                            onClick={() => this.load(user)}><i className="fas fa-pen"></i></button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.remove(user)}><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return(
            <Main {...headerProps}>
                <div className="display-6">Cadastrar Usuário</div>
                <hr className='mt-1' />
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/all'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Nav from '../components/template/Nav'
import Routers from '../components/router/Routers'
import Footer from '../components/template/Footer'


export default props =>
      <BrowserRouter>
            <div className="app">
                  <Routers />
                  <Nav />
                  <Footer />
            </div>
      </BrowserRouter>

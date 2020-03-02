import React from 'react'
import { Router } from '@reach/router'
import './assets/scss/index.scss'

/* Pages */
import Home from './pages/Home'
import Cheatsheet from './pages/Cheatsheet'
import Customize from './pages/Customize'
import Docs from './pages/Docs'

/* Componets */
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import '../node_modules/eos-icons/dist/extended/css/eos-icons-extended.css'
import AppContext from './components/AppContext'

const App = () => {
  return (
    <AppContext>
      <div className='App'>
        <Navigation />
        <div className='app-container'>
          <Router>
            <Home path='/' />
            <Cheatsheet path='/cheatsheet' />
            <Customize path='/customize' />
            <Docs path='/docs' />
          </Router>
        </div>
        <Footer />
      </div>
    </AppContext>
  )
}

export default App

import React from 'react'
import './App.css'
import { Navbar, Dashbord} from './Components/Index'
import { BrowserRouter } from 'react-router-dom'
import '@fortawesome/fontawesome-free'

const App = () => {
  return (
    <>
      <div className="app">
        <div className="container">
          <BrowserRouter>
            <Navbar />
            <Dashbord />
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App


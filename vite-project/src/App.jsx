// import { useState, useReducer } from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './comps/NavBar'
import Posts from './comps/Posts'
import './App.css'

function App() {



  return (
    <>
      <Router>
        <NavBar/>
        <Posts/>
        <Routes>
          <Route/>
        </Routes>
      </Router>
    </>
  )
}

export default App

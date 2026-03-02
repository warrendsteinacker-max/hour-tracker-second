// import { useState, useReducer } from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './comps/NavBar'
import Posts from './comps/Posts'
import PostPage from './comps/PostPage'
import EditP from './comps/EditP'
import './App.css'

function App() {



  return (
    <>
      {/* <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Posts data={data} setD={setD}/>}/>
          <Route path='/post' element={<PostPage/>}/>
          <Route path='/edit/:id' element={<EditP/>}/>
        </Routes>
      </Router> */}
      <div>hello</div>
    </>
  )
}

export default App

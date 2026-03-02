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
      <div style={{padding: '10px', display: 'block', flexDirection: 'row', gap: '0px', backgroundColor: 'green', width: '500px', height: '500px', justifyContent: 'space-evenly' }}><div style={{backgroundColor: 'blue', height: '100px'}}>1</div><div style={{backgroundColor: 'blue'}}>2</div></div>
    </>
  )
}

export default App

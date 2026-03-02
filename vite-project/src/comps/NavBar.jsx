import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {



  return (
    <>
      <div style={{position: 'absolute', top: '2%', left: '5%', display: 'flex', flexDirection: 'row', background: 'linear-gradient(to left, purple, red)', borderRadius: '15px', padding: '20px', gap: '20px', width: '90%'}}>
        <img src='vite.svg' style={{border: '5px solid white'}}/>
        <Link style={{padding: '10px', textDecoration: 'none'}} to='/post'>make post</Link>
        <h3>Welcom to my Blog</h3>
      </div>
    </>
  )
}

export default NavBar
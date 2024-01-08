import React from 'react'
import '../styles/Navbar.css'
import { useAppSelector } from '../store/Store'

function Navbar() {

  const name=localStorage.getItem('agentName')

  return (
    <div className='containerNav'>
       <div className='leftSide'>
         <text>Transfert Nationale</text>
       </div>
       <div className='rightSide'>
            <text>{name}</text>
            <div className='cercle'>
                <text>Agent</text>
            </div>
       </div>
    </div>
  )
}

export default Navbar

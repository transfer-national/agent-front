import React from 'react'
import '../styles/Navbar.css'
import { useAuth } from '../conf/AuthContext';

function Navbar() {
    const {agent} = useAuth();
  return (
    <div className='containerNav'>
       <div className='leftSide'>
         <text>Transfert Nationale</text>
       </div>
       <div className='rightSide'>
            <text>{agent.name}</text>
            <div className='cercle'>
                <text>Agent</text>
            </div>
       </div>
    </div>
  )
}

export default Navbar

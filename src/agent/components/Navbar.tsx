import React from 'react'
import '../styles/Navbar.css'
import { useAuth } from '../conf/AuthContext';
import { useAppSelector } from '../store/Store'

function Navbar() {

    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    console.log(user) 

  return (
    <div className='containerNav'>
       <div className='leftSide'>
         <text>Transfert Nationale</text>
       </div>
       <div className='rightSide'>
            <text>{user.agent.name}</text>
            <div className='cercle'>
                <text>Agent</text>
            </div>
       </div>
    </div>
  )
}

export default Navbar

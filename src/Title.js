import React from 'react'
import {NavLink} from 'react-router-dom';

function Title() {

    return (
    <div className="title">
        <div className="header">
            MEME CREATOR
        </div>
        <div className="startBtn">
        <NavLink to="/main" style = {{textDecoration: 'none'}} >
            <button >START</button>
            </NavLink>
        </div>
    </div>
  )
}

export default Title
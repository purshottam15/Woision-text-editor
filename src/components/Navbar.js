import React from 'react'
// import {Link} from 'react-router-dom'

export default function navbar(props) {
  return (
    <div>
          <nav className={`navbar  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
 
    <a  href='#' className='navbar-brand'>Woision</a>
    
   
   
    
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.switchtextcolor}`} htmlFor="flexSwitchCheckDefault">{props.switchtext}</label>
</div>

  </div>
</nav>
    </div>
  )
}


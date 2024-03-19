import React from 'react'
import logo from '../icons/logo.png'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  
  const mode=()=>{
    if(props.mode.bgColor==="#121212"){
      props.setMode({
        bgColor:"whitesmoke",
        textColor:"black"
      })
    }
    else{
      props.setMode({
        bgColor:"#121212",
        textColor:"white"
      })
    }
  }


  return (
    <div className='header-outer-box'>
    <div className="header">
    <div className="image-box">
      <img src={logo} />
    </div>
    <div className="header-buttons">
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={mode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode.bgColor==="whitesmoke"?"Dark":"Light"}</label>
</div>
      <Link to="/about" style={{marginRight:"20px",textDecoration:"none",color:props.mode.textColor}}>About</Link>
      <Link to="/" style={{marginRight:"20px",textDecoration:"none",color:props.mode.textColor}}>Home</Link>
    </div>
  </div>
  </div>
  )
}

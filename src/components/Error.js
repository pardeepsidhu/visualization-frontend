import React from 'react'
import png from '../icons/error.png'

export default function Error() {
  return (
    <div style={{width:"100%",height:"100%",display:"flex", justifyContent:"center"}}>
      <img src={png} style={{width:"95%",height:"100vh",borderRadius:"10px",marginTop:"5px"}}/>
    </div>
  )
}

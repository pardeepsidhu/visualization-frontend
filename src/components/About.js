import React from 'react'

export default function About(props) {
  return (
    <>
     <div className="container">
      <h1>About Us</h1>
      <div className="accordion " id="accordionExample"   >
  <div className="accordion-item" style={{background:props.mode.bgColor,color:props.mode.textColor}}>
    <h2 className="accordion-header">
      <button className="accordion-button"  style={{background:props.mode.bgColor,color:props.mode.textColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       About Developer
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"   >
       Name : Pardeep Singh <br/> Profession : Student <br/> Email : Sidhupardeep618@yahoo.com <br/> Mobile : 82840-12817 <br/>
       Qualification : B.C.A. <br/> Purpose : Codding Project 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{background:props.mode.bgColor,color:props.mode.textColor}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={{background:props.mode.bgColor,color:props.mode.textColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Used Techonologies
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" > 
       This Is A Simple Data Analistics Website Designed Only For Educational And Learning Purpose ... <br/>
       Used Techonologies : <br/>
       Markup : HTML/JSX<br/>
       Language : JavaScript <br/>
       Style : CSS And Bootstraps <br/>
       FrontEnd Framework : React.JS <br/>
       Server Side Programming Language : Node.js <br/>
       BackEnd Framework : Express.js <br/>
       Database : MongoDB <br/>
       IDE : Visual Studio Code And Sublime Text Editor<br/>
       Operating System : Ubuntu 22.04 (Linux OS)

      </div>
    </div>
  </div>
  <div className="accordion-item" style={{background:props.mode.bgColor,color:props.mode.textColor}}>
    <h2 className="accordion-header" style={{background:props.mode.bgColor,color:props.mode.textColor}}>
      <button className="accordion-button collapsed" style={{background:props.mode.bgColor,color:props.mode.textColor}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      For Users
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
       Hello All Users , <br/> I Hope You All Liked Our Website . <br/> It Is Designed Only For Education Purpose. <br/>
       If you Are Getting Any So Bug Or Error  Sorry For That . <br/> At Last Thanks For Visiting Us ...
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

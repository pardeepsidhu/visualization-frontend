import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

export default function Relavance(props) {
    const [relavance,setRelavance]=useState([]);
    const [waiting,setWaiting]=useState(true);
    const [data,setData]=useState([])
   

    const inint=()=>{
      setData(props.data);
      if(data.length>0){

    let relavanceData = data.reduce((acc, {relevance}) => {     
      acc[relevance] = (acc[relevance] || 0) + 1;
      return acc;
  }, {}); 
 
  const relavanceValues = Object.keys(relavanceData).map(Number);
  const relavanceCounts = Object.values(relavanceData).map(Number);
  setRelavance([{
    x: relavanceCounts,
    y: relavanceValues,
    type: 'bar', 
    orientation:"h"
}])
}
}

  useEffect(()=>{
    inint()
    setWaiting(false)
  },[waiting,props])
  
  return (
    <div className='plot-box' >
    <div className='plot'>
    { !waiting && <Plot
         data={relavance}
        layout={{
          title:"Relavance Bar Chart",
          paper_bgcolor:props.mode.bgColor,
          plot_bgcolor:props.mode.bgColor
        }}
         style={{ width: '100%', height: '100%' }}
       /> } 
          </div> 
     </div>
  )
}

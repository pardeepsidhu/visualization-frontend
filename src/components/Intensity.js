import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

export default function Intensity(props) {
    const [data,setData]=useState([]);
    const [waiting,setWaiting]=useState(true)
    const [intensity,setIntensity]=useState([])
   
    const inint=()=>{
        setData(props.data);
        if(data.length>0){

      let intensityData = data.reduce((acc, {intensity}) => {     
        acc[intensity] = (acc[intensity] || 0) + 1;
        return acc;
    }, {}); 
   
    const intensityValues = Object.keys(intensityData).map(Number);
    const intensityCounts = Object.values(intensityData).map(Number);
  
    setIntensity([{
      x: intensityValues,
      y: intensityCounts,
      mode: 'markers', 
      type: 'scatter',
      marker: { size: 12 } 
  }])
  }
}

    useEffect(()=>{
      inint()
      setWaiting(false)
    },[waiting,props.data])

  return (
    <div className='plot-box' >
    <div className='plot'>
    { !waiting && <Plot
         data={intensity}
        layout={{
          title:"Intensity Scatter Chart",
          xaxis:{
            title:"intensity value"
          },
          yaxis:{
            title:"intensity"
          },
          paper_bgcolor:props.mode.bgColor,
          plot_bgcolor:props.mode.bgColor
        }}
         style={{ width: '100%', height: '100%' }}
       /> } 
          </div> 
     </div>
  )
}

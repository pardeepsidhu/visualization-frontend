import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

export default function LIkelyhood(props) {
    const [waiting,setWaiting]=useState(true);
    const [likelihood,setLikelyhood]=useState([]);
    const [data,setData]=useState([]); 
   

    const inint=()=>{
        setData(props.data);
        if(data.length>0){

      let likelihoodData = data.reduce((acc, {likelihood}) => {     
        acc[likelihood] = (acc[likelihood] || 0) + 1;
        return acc;
    }, {}); 
   
    const likelihoodValues = Object.keys(likelihoodData).map(Number);
    const likelihoodCounts = Object.values(likelihoodData).map(Number);
    setLikelyhood([{
      x: likelihoodValues,
      y: likelihoodCounts,
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
         data={likelihood}
        layout={{
          title:"Likelyhood Scatter Chart",
          xaxis:{
            title:"Likelyhodd value"
          },
          yaxis:{
            title:"Likelyhood"
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

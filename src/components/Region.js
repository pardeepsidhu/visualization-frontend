import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'

export default function Region(props) {
  const[waiting,setWaiting]=useState(true)
  const [data,setData]=useState([]);
  const [regions,setRegions]=useState([]);

  const inint=()=>{
    setData(props.data);
    if(data.length>0){

      const regionData = data.reduce((acc, {region}) => {     
        acc[region] = (acc[region] || 0) + 1;
        return acc;
    }, {});

    const regionName = Object.keys(regionData);
    const regionCounts = Object.values(regionData);
    regionName[3]="unknown"
    setRegions([
      {
        x: regionName,
        y: regionCounts,
        type: 'bar'
      }
    ])
    }
  }

  useEffect(()=>{
    inint();
    setWaiting(false);
  },[waiting,props.data])
  return (
    <div className='plot-box' >
    <div className='plot'>
    { !waiting && <Plot
         data={regions}
        layout={{
          title:"Country Bar Chart",
          paper_bgcolor:props.mode.bgColor,
          plot_bgcolor:props.mode.bgColor
        }}
         style={{ width: '100%', height: '100%' }}
       /> } 
          </div> 
     </div>
  )
}

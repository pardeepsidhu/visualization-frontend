import { set } from 'mongoose';
import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

export default function Country(props) {
    const [waiting,setWaiting]=useState(true);
    const [data,setData]=useState([]);
    const [country,setCountry]=useState([]);
  

    const inint=()=>{
        setData(props.data);
        if(data.length>0){
    
          const countryData = data.reduce((acc, {country}) => {     
            acc[country] = (acc[country] || 0) + 1;
            return acc;
        }, {});
    
        const countryName = Object.keys(countryData);
        const countryCounts = Object.values(countryData);

        setCountry([
          {
            x: countryName,
            y: countryCounts,
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
         data={country}
        layout={{
          title:"Regions Bar Chart",
          paper_bgcolor:props.mode.bgColor,
          plot_bgcolor:props.mode.bgColor
        }}
         style={{ width: '100%', height: '100%' }}
       /> } 
          </div> 
     </div>
  )
}

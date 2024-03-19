import React, { useContext, useEffect, useState } from 'react'
import Plot from 'react-plotly.js'


export default function Year(props) {
    const [data,setData]=useState([]);
    const [layout,setLayout]=useState({});
    const [waiting,setWaiting]=useState(true);
    const [startYear,setStartYear]=useState([]);
    const [endYear,setEndYear]=useState([]);
   
   


    const init=()=>{
      setData(props.data)
      if(data.length >0){
      const startingYearCounts = data.reduce((acc, { start_year }) => {     
          acc[start_year] = (acc[start_year] || 0) + 1;
          return acc;
      }, {});

      const startingYears = Object.keys(startingYearCounts).map(Number);
      const startingCounts = Object.values(startingYearCounts);
     startingYears[startingYears.length-1]='unknown';

      setStartYear([
            {
              values: startingCounts,
              labels: startingYears,
              type: 'pie',
            }
          ])
          setLayout({
            title:"Starting Years data",
          })

          const endingYearCounts = data.reduce((acc, { end_year }) => {     
            acc[end_year] = (acc[end_year] || 0) + 1;
            return acc;
        }, {});

        const endingYears = Object.keys(endingYearCounts).map(Number);
        const endingCounts = Object.values(endingYearCounts);
        endingYears[endingYears.length-1]="unknown";
        setEndYear([
          {
            values: endingCounts,
            labels: endingYears,
            type: 'pie',
            hole:"0.5"
          }
        ])
    }
    }

    useEffect(()=>{
      init()
      setWaiting(false)
    },[waiting,props.data])
  return (
    <div className='plot-box' >
   <div className='plot'>
   { !waiting && <Plot
        data={startYear}
        layout={{
          title:"Starting Years Data",
          paper_bgcolor:props.mode.bgColor,
          plot_bgcolor:props.mode.bgColor
        }}
        style={{ width: '100%', height: '100%' }}
      /> } 
         </div> 
         <div className='plot'>
   { !waiting && <Plot
  
        data={endYear}
        layout={{
          title:"Ending Years Data",
          paper_bgcolor:props.mode.bgColor,
          plot_bgcolor:props.mode.bgColor
        }}
        style={{ width: '100%', height: '100%' }}
      /> } 
         </div> 
    </div>
  )
}

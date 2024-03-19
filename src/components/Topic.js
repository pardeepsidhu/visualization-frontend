import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

export default function Topic(props) {
    const [waiting,setWaiting]=useState(true);
    const [data,setData]=useState([])
    const [topic,setTopic]=useState([]);
    

    const inint=()=>{
        setData(props.data);
        if(data.length>0){
          const topicData = data.reduce((acc, {topic}) => {     
            acc[topic] = (acc[topic] || 0) + 1;
            return acc;
        }, {});
    
        const topicName = Object.keys(topicData);
        const topicCounts = Object.values(topicData);
        setTopic([
          {
            x: topicCounts,
            y: topicName,
            type: 'bar',
            orientation: 'h'
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
         data={topic}
        layout={{
          title:"Topic Bar Chart",
          paper_bgcolor:props.mode.bgColor,
          plot_bgcolor:props.mode.bgColor
        }}
         style={{ width: '100%', height: '100%' }}
       /> } 
          </div> 
     </div>
  )
}

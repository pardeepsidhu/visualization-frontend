import React, { useEffect, useState } from 'react'
import Year from './Year';
import Region from './Region';
import Intensity from './Intensity';
import LIkelyhood from './LIkelyhood';
import Country from './Country';
import Topic from './Topic';
import Relavance from './Relavance';

export default function Home(props) {

  const [data,setData]=useState([]);
  const [regions,setRegions]=useState([]);
  const [topics,setTopics]=useState([])
  const [regionFilter,setRegionFilter]=useState("region")
  const [topicFilter,setTopicFilter]=useState("topic")
  const [staticData,setStaticData]=useState([]);
  const [waiting,setWaiting]=useState(true)

 const initFliters=()=>{
  if(staticData.length>0){
    const regionData = staticData.reduce((acc, {region}) => {     
      acc[region] = (acc[region] || 0) + 1;
      return acc;
  }, {});
  const regionName = Object.keys(regionData);
  setRegions(regionName)


const topicData = staticData.reduce((acc, {topic}) => {     
  acc[topic] = (acc[topic] || 0) + 1;
  return acc;
}, {});

const topicName = Object.keys(topicData);
setTopics(topicName);
applyFilters()

}
  }

  const applyFilters=()=>{
    // initFliters()
    if(staticData.length>0){
      let tempData=staticData;
      if(regionFilter !=="region"){
        tempData = tempData.filter((item)=>{
          return item.region===regionFilter;
        })
      }

        if(topicFilter !=="topic"){
          tempData = tempData.filter((item)=>{
            return item.topic=topicFilter;
          })
        }
        console.log(tempData)
        setData(tempData)
      }
    }
  

  const getData=async()=>{
    let result = await fetch(`http://localhost:5000/data`);
    result=await result.json();
    setData(result);
    setStaticData(result);
    setWaiting(false)
  }

  useEffect(()=>{
    if(staticData.length>0){
      initFliters();
    }
    else{
      getData()
    }
},[staticData]);

  return (
    <div className='home'>

      { waiting ? <div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>  :
<>
     <div className='heading-box'>
      <h1>Data Visualization</h1>

      <div className='filer-box'>
      <select onChange={(e)=>{setRegionFilter(e.target.value); initFliters()}} style={{width:"100px",background:props.mode.bgColor,color:props.mode.textColor}}>
      <option defaultValue value={"region"}>region</option>
        { regions.length >0 && 
        regions.map((item)=>{
          return item?<option defaultValue value={item}>{item}</option>:<option defaultValue value={""}>Unknown</option>
        })
        }
 </select>


 <select onChange={(e)=>{setTopicFilter(e.target.value); initFliters(); applyFilters()}} style={{width:"100px",background:props.mode.bgColor,color:props.mode.textColor}}>
      <option defaultValue value={"topic"}>topic</option>
        { topics.length >0 && 
        topics.map((item)=>{
          return item?<option defaultValue value={item}>{item}</option>:<option defaultValue value={""}>Unknown</option>
        })
        }
 </select>
 </div>
 {
  props.mode.bgColor==='whitesmoke'?
  <button type="button text-dark" onClick={applyFilters} class="btn btn-secondary">Apply Filters</button>:
  <button type="button" onClick={applyFilters} className="btn btn-dark">Apply Filters</button>
 }

     
        

      </div> 
      {
        data.length >0 && 
        <>
        <Year data={data} mode={props.mode}/>
        <Region data={data}  mode={props.mode} />
        <Country data={data}  mode={props.mode} />
        <Intensity data={data}  mode={props.mode} />
        <LIkelyhood data={data}  mode={props.mode} />
        <Topic data={data}  mode={props.mode} />
       <Relavance data={data}  mode={props.mode} />
        </>
      }
  </> }
    </div>
  )
}

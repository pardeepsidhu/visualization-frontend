import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Error from './components/Error';
import About from './components/About';


function App() {
  const [mode,setMode]=useState({
    bgColor:"whitesmoke",
    textColor:"black"
  })
  useEffect(()=>{
    document.body.style.background=mode.bgColor;
    document.body.style.color=mode.textColor;
  },[mode])
  return (
    <div className="App">
      <Router>
      <Nav mode={mode} setMode={setMode}/>
        <Routes>
          <Route index element={ <Home mode={mode}/> } />
          <Route path='/about' element={<About mode={mode}/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

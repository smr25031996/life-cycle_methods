import './App.css';
import React, { useEffect } from 'react';
import Sample from './components/Sample';
import Employees from './components/employee';

function App() {
  useEffect(()=>{
    return ()=>console.log("component will unmount");
  },[]);

  return (
   <React.Fragment>
    <h1>mounted component</h1>
    <Sample />
    <Employees />
   </React.Fragment>
  );
}

export default App;



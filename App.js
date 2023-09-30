import React,{useState} from 'react';
const namedd="suvash"
function App() {
    

 const[named,setnamed]=useState(`Hi I will do welcome using ${namedd} after clicking the click me.`)
 

 

 function checking()
  {    
     
    setnamed(`Good!! Now You are Welcomed By ${namedd}Now`)
  }
  return (
    <>
        
      <div style={{ backgroundColor: "red" }}>
        <h1>{named}</h1>
        <button className="btN" onClick={checking}>Click me</button>
      </div>
    </>
  );
}



export default App;

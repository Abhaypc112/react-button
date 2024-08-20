import {useState} from 'react'
import './App.css';

function App() {
  const [bgColor,setColor]=useState("white")
  let changeTheme=()=>{
    (bgColor==="white")?setColor("black"):setColor("white")
  }
  return (
    <div className="App" style={{backgroundColor:bgColor,transition:"1s"}}>
      <button style={{backgroundColor:bgColor==='white'?"black":"white",color:bgColor}}
      onClick={changeTheme}>{bgColor==='white'?"Dark Mode":"Light Mode"}</button>
    </div>
  );
}

export default App;

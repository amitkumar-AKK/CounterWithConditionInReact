import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  function increment(){
    setCount(count+1)
  }
  let message=""
   if(count==0){
        message=<h1>Conditon 0</h1>
        }
    else if(count==1){
      
        message=<h1>Conditon 1</h1>
        
    }
    else if(count==2){
      
        message=<h1>Conditon 2</h1>
        
    }
    else if(count==3){
      
        message=<h1>Conditon 3</h1>
        
    }
    else if(count==4){
      
        message=<h1>Conditon 4</h1>
        
    }
    else if(count<0){
      message=<h1>Number Less than zero</h1>
    }
    else {
      message=<h1>Greater than 4</h1>
    }
      
  return (
    <div>
      <h1>Counter:{count}</h1>
       {message}
      <button onClick={increment}>Counter</button>
      <button onClick={()=>{setCount(count-1)}}>Counter in Decreasing</button>
       
      
    </div>
  )
}

export default App

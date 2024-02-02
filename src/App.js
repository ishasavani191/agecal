import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';

function App() {
const [data,setdata]=useState("hello");
const[data1,setdata1]=useState("good")

useEffect(() => {
  console.log("hello");
},[])

useEffect(()=>{
  console.log("good")
},[])
const btnhendler1 =()=>{
  setdata1(" good morning")
}

const btnhendler = ()=>{
  setdata("hello welcome")

}
  return (
    <div>
      <h1>{data}</h1>
      <h1>{data1}</h1>
      <input type='button'  value={'click'} onClick={btnhendler}></input>
      <input type='button'  value={'click'} onClick={btnhendler1}></input>

    </div>
  );
}

export default App;

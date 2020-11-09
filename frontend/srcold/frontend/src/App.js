import { map } from 'async';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './crud.css'

const ENDPOINT = 'http://localhost:5000/'

function App() {
  const [name, setName] = useState([])
  const [input, setInput] = useState('');


  const datafetch = async () => {
    const data = await axios.get(`${ENDPOINT}api`) 
    setName(data.data)  
    return (data)
  }
  
  const testfetch = async () => {
    const data = await axios.get(`${ENDPOINT}api/test`) 
    console.log(data)
    return
  }
  const sendData = async (name) => {
    const data = await axios.post(`${ENDPOINT}api/post`, {name: name}) 
    setName(data.data) 
    console.log(name) 
    return (data)
  }


  useEffect(() =>{
    datafetch()
  }, [ENDPOINT])
  
  const onSubmit = () =>{
    sendData(input)
  }
  return (
      
    <div className="crud">
      <h1>Crud With API</h1>  
      <br /> 
      <input onChange={(e) => setInput(e.target.value)} />
      <br />
      <button onClick={onSubmit} className="add">Add</button>
      <button onClick={testfetch} className="add">test</button>
      <br />
      {
        name.map((data, index) => {
          return(
          <h2 key={index}><span className="datacol">ID</span >{data.id}<span className="datacol">Name</span>{data.name}</h2>
          )})
      }      
    </div>
    
  );
}

export default App;

import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

const serverUrl = String(import.meta.env.VITE_SERVER_URL)


function App() {
  const [data, setdata] = useState('')

  function handleClick(){
    console.log(serverUrl)
    axios.get(`${serverUrl}/about`, {withCredentials: true}).then((response) => {
      console.log(response.data)
      setdata(response.data)
    })
  }
  


  return (
    <>
      <button onClick={handleClick}>
        get about
      </button>
      <p>{data === "" ? "no data" : data}</p>
    </>
  )
}

export default App

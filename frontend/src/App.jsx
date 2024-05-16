
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:5000/';

const App = () => {
  const[message,setMessage] = useState("")
  const[show,setshow] = useState([])
  useEffect(() => {
    // Connect to Socket.io server
    const socket = io(SOCKET_SERVER_URL, {
      transports: ['websocket'],
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "value"
      }
    });

    // Example: Listen for a 'message' event from the server
    socket.on('message', (data) => {
      
   setshow(prevData => [...prevData,data])
    });

    
  }, []); // Ensure useEffect runs only once on component mount
console.log(show)
  return (
    <div>
    <p>
      {show.length !=0 ? <ul>
        {show.map((value,index)=>{
          return <li key={index} >{value}</li>
        })}
      </ul>:<></>}
    </p>
      <br/>
      <input type='text' value={message} onChange={(e)=>{
        setMessage(e.target.value)
      }}/><br/>
      <button onClick={()=>{
        const socket = io(SOCKET_SERVER_URL, {
          transports: ['websocket'],
          withCredentials: true,
          extraHeaders: {
            "my-custom-header": "value"
          }
        });
        socket.emit('sendmessage',message);
        setMessage("")
      }}>Send</button>
      
    </div>
  );
};

export default App;

import './App.css';
import Child from './Child';
import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
  useEffect(()=>{
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E9%95%BF%E6%B2%99&ci=70&channelId=4').then(res=>{
      console.log(res.data);
    })
  }, [])
  return (
    <div>
      APP
      <ul>
        <li>111</li>
        <li>222</li>
      </ul>
      <Child />
    </div>
  );
}

export default App;

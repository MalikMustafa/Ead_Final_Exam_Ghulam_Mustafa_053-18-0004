import axios from 'axios';
import React, { useEffect, useState } from 'react'

 function AxiosAPI() {
    const [userdata, setData]=useState([]);
    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users") 
       .then((response)=>{
        console.log(response);
        setData(response.data);
       })
    },[])
  return (
    <div>
      <h1>Axios API in React</h1>
      {userdata.map((data)=>{
            return (
                <div>{data.name}</div>
            )
      })}
    </div>
  )
};

export default AxiosAPI;

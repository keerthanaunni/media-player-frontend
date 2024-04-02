import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {deleteVideoAPI, getVideoHistoryAPI} from '../../service/allAPI'


function WatchHistory() {
  
  const [history,setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory =async()=>{
    const result= await getVideoHistoryAPI()
    if(result.status===200){
       setHistory(result.data)
    }else{
      console.log("api failed");
      console.log(result.message);

    }
  }
    const removeVideoHistory = async(id)=>{
      await deleteVideoAPI(id)
      getHistory()
    }

  
  return (
    <>
     <div className="container mt-5 mb-5 d-flex justify-content-between">
     <h2>Watch-History</h2>
     <Link style={{textDecoration:'none', color:'blueviolet', fontSize:'25px'}}> Back to home <i className="fa-solid fa-arrow-rotate-left"></i></Link>
     </div>
     <table className='table mb-5 container shadow w-100'>
     <thead>
      <tr>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Timestamp</th>
        <th>Action</th>
      </tr>
     </thead>
     <tbody>
      
        {
        history?.length>0?history?.map((video,index)=>(

          <tr>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a href={video?.link} target='_blank'>https://youtu.be/qvsiJKdDxPs?feature=shared</a></td>
          <td>{video?.timestamp}</td>
          <td><button onClick={()=>removeVideoHistory(video?.id)} className='btn'><i className="fa-solid fa-trash"></i></button></td>
        </tr>

        )):<p className='text-danger fw-bolder'>Nothing to display</p>
      }
      
     </tbody>
     </table>
    </>
  )
}

export default WatchHistory
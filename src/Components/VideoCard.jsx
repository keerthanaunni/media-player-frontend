import React, { useState } from 'react'
import  Modal from 'react-bootstrap/Modal';
import Card  from 'react-bootstrap/Card';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../service/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const{caption,link}=video

    let today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    
    let videoHistory ={caption,link,timestamp}

    //make api call
    await addVideoHistoryAPI(videoHistory)
  }

  const removeVideo = async (id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted =(e,id)=>{
    console.log("Drag Started....Video Id:"+id);
    e.dataTransfer.setData("VideoId",id)
  }


  return (
    <div>
   <Card draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img height={'200px'} variant="top" onClick={handleShow} src={video?.url} />
      <Card.Body className='bg-primary' style={{borderRadius:'5px'}}>
        <Card.Title className='d-flex justify-content-between align-item-center'>
          <h5>{video?.caption}</h5>
       {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn' ><i class="fa-solid fa-trash"></i></button>}
        </Card.Title>
      
       
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="425" src={`${video.link}?autoplay=1`} title="Premalu Official Trailer | Naslen | Mamitha | Girish AD | Bhavana Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard
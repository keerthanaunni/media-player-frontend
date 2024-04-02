import React, { useState } from 'react'
import { Button,  Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { uploadVideoAPI } from '../../service/allAPI';





function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })

  //console.log(uploadVideo);

const getYoutubeEmbedLink =(e)=>{
  const {value}=e.target
  if(value.includes("v=")){
    let vID=value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${vID}`);
    setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
  }else{
    setUploadVideo({...uploadVideo,link:""})
  }
}
//https://www.youtube.com/embed/6G75yTBzBUA 

const handleAdd= async ()=>{
  const {id, caption, url,link}= uploadVideo
  if(!id || !caption || !url || !link){
    alert("please fill the missing fields")
  }else{
    //store uploded video to json server
    const result = await uploadVideoAPI(uploadVideo)
    // console.log(result);
    if(result.status >=200 && result.status<300){
      //success
      handleClose()
      //emptyfields
      setUploadVideo({
        id:"",caption:"",url:"",link:""
      })
      //after success response
      setUploadVideoResponse(result.data)
    }else{
      alert(result.message)
    }
  }
}


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className='d-flex align-item-center' >
          <h5>Upload-Videos</h5>
          <button className='btn' onClick={handleShow}><i class="fa-solid fa-upload fa-bounce"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
          <FloatingLabel
        controlId="floatingInputId"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video Name">
        <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}  />
      </FloatingLabel>
      <br/>
      <FloatingLabel
        controlId="floatingInputImage"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video URL">
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeEmbedLink}/>
      </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Add
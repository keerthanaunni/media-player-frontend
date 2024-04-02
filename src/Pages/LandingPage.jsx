import React from 'react'
import { Card, Col,Row } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <div>
    <Row className="mt-5 align-item-center justify-content-between w-100">
    <Col></Col>
    <Col lg={5}>
      <h1 style={{fontSize:'40px'}}>Welcome To <span className='text-warning'>Media Player</span> </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic quod voluptates aspernatur dolorum harum iusto nostrum cupiditate nobis molestias illo, in sapiente facilis dolor eligendi, repudiandae accusantium asperiores fugit.</p>
      <button onClick={()=>navigateByUrl('./home')} className='btn btn-info mt-4'>Get Started</button>
    </Col>
    <Col></Col>
    <Col lg={5}>
      <img src='https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif'
      width={'500px'} height={'400px'} alt=''/>
    </Col>
    <Col></Col>
    </Row>
    <div>
    <h3 className='mt-5' style={{marginLeft:'600px', Top:'20px'}}>Features</h3>
      <div className="container mb-5 mt-5 d-flex align-text-center justify-content-center flex-coloum">
     
      <div className="cards mb-5 mt-5 d-flex align-text-center justify-content-between w-100">
      <Card style={{ width: '22rem' }} className='p-4 bg-info'>
            <Card.Img variant="top" src="https://i.gifer.com/8Iqz.gif" />
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


          <Card style={{ width: '22rem' }} className='p-4 bg-info'>
            <Card.Img variant="top"height={'230px'} width={'330px'} src="https://i.gifer.com/7ZEy.gif" />
            <Card.Body>
              <Card.Title className='text-primary'>Categerized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


          <Card style={{ width: '22rem' }} className='p-4 bg-info'>
            <Card.Img variant="top" height={'230px'} width={'330px'} src="https://i.gifer.com/Q4Pv.gif" />
            <Card.Body>
              <Card.Title className='text-primary'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
      </div>
    </div>
   
    <div className="container border rounded p-3 border-light mb-5 d-flex align-item-center justify-content-between w-100">
      <div className="col lg-5">
        <h4 className='text-warning'>Simple,Powerful & Fast</h4>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae unde alias doloribus officia porro omnis ullam! Dicta obcaecati inventore at, fugit odio quasi totam repellendus eaque quidem fuga ullam.</h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae unde alias doloribus officia porro omnis ullam! Dicta obcaecati inventore at, fugit odio quasi totam repellendus eaque quidem fuga ullam.</h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae unde alias doloribus officia porro omnis ullam! Dicta obcaecati inventore at, fugit odio quasi totam repellendus eaque quidem fuga ullam.</h6>
      </div>
      <div className="video col-lg-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9AizchSQURA?si=aPO4F1fJNtaEgXz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
    
</div>
  )
}

export default LandingPage
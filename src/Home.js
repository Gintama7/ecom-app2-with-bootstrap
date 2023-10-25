import React from 'react'
import { Button, Container, Row,Col } from 'react-bootstrap'

const dummyConcerts = [{date:'JUL 16', city:'DETROIT, MI',venue:'DTE ENERGY MUSIC THEATRE'},
{date:'JUL19',city:' TORONTO,ON',venue:' BUDWEISER STAGE'},
{date:'JUL 22',city:'BRISTOW, VA',venue: ' JIGGY LUBE LIVE'},
{date:'JUL 29' ,city:  ' PHOENIX,venue' ,venue:'AZ  AK-CHIN PAVILION'},
{date:'AUG 2'   ,city:  ' LAS VEGAS',venue : 'NV  T-MOBILE ARENA'},
{date:'AUG 7'     ,city: ' CONCORD',venue : 'CA  CONCORD PAVILION'}]


const Home = () => {

    
  return (
    <Container>
    
    <Container>
      <h2>Tours</h2>
      {dummyConcerts.map((con)=>(
        <Row className='mb-3'>
        <Col>
        {con.date}
        </Col>
        <Col>
        {con.city}
        </Col>
        <Col>
        {con.venue}
        </Col>
        <Col>
        <Button>BUY TICKETS</Button>
        </Col>
        </Row>
      ))}
      
    </Container>
    </Container>
  )
}

export default Home

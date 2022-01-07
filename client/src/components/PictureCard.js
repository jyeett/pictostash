import {Card, Button, Col} from 'react-bootstrap'

function PictureCard({imgUrl, handleShowImg, currId}) {
    return (
        <div className="picture-card">
            <Col className='my-5 mx-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='card-img' variant="top" src={imgUrl} style={{'objectFit': 'cover'}} />
                    <Card.Body style={{"backgroundColor": "#deb185"}}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleShowImg(currId)}>View Image</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default PictureCard;
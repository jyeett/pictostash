import {Card, Button, Col} from 'react-bootstrap'
import {useHistory} from 'react-router'

function AlbumCard() {

    const history = useHistory()

    function handleClick() {
        history.push('/album')
    }

    return (
        <div className="album-card">
            <Col className='my-5 mx-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/100/100" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={handleClick}>View Album</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default AlbumCard;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/86.jpg" />
            <Card.Body>
                <Card.Title>Muhammad Qasim</Card.Title>
                <Card.Text>
                    this is muhammad Qasim a MERN stac developer from par to
                    transform the problem into real life application
                </Card.Text>
                <Button variant="primary">View Website</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;
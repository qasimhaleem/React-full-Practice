import { Container, Row, Col, Button, Image } from 'react-bootstrap';
const HeroSection = () => {
    return (
        <div className="bg-dark text-white py-5">
            <Container>
                <Row className="align-items-center ">

                    <Col md={6} className="text-center text-md-start w-70">
                        <h1 className="display-4 fw-bold">Hello I am Muhammad Qasim</h1>
                        <p className="lead text-muted mb-4">
                            I am a passionate Web Developer skilled in MERN stack.
                            Let's build something amazing together.
                        </p>

                        <div className="d-flex justify-content-center justify-content-md-start gap-2">
                            <Button variant="danger" size="lg" href="#contact">Hire Me</Button>
                            <Button variant="secondary" size="lg" href="#about">About Me</Button>
                        </div>
                    </Col>

                    <Col md={6} className="text-center mt-4 mt-lg-0">
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Profile"
                            rounded
                            fluid
                            className="shadow-lg w-50"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
// LogoBrand.js
import { Navbar } from 'react-bootstrap';

const LogoBrand = ({ logo, name }) => {
    return (
        <Navbar.Brand href="#home">
            <img
                alt="Logo"
                src="https://randomuser.me/api/portraits/men/86.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top me-2 rounded-circle"
            />
        </Navbar.Brand>
    );
};

export default LogoBrand;
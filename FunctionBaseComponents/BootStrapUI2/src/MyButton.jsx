import React from 'react'
import Button from 'react-bootstrap/Button';

const MyButton = () => {
    return (
        <div> <Button variant="primary" size="lg" active>
            Primary button
        </Button>
            <Button variant="secondary" size="lg" active>
                Button
            </Button></div>
    )
}

export default MyButton
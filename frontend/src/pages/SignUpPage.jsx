import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'

function SignUpPage (){
    const nav= useNavigate()
    const submitSignUp = (event) => {
        event.preventDefault();
        console.log('submitted: ' + event.target[0].value, event.target[1].value);
        axios.post('/signup', {
            'email': event.target[0].value,
            'password': event.target[1].value
        }).then((response) => {
            if (response.data.success == false) {
                alert('Failed Sign Up')
                console.log('failed sign up')
            } else {
                nav("/")
            }
        })
    }

    return(
        <div>
            <h1>Welcome To Whip Up!</h1>
            <h3>Sign Up</h3>
            <Form onSubmit={submitSignUp}>
                <Form.Group className="mb-3" controlId="formEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p><Link to='/'>Log In</Link></p>
        </div>
    )
}

export default SignUpPage
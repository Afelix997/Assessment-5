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
        <div className='LogBody'>
            <h1 className='LogMain'>Welcome To Whip Up!</h1>
            <h3 className='LogBody'>Create An Account</h3><br/>
            <Form onSubmit={submitSignUp}>
                <Form.Group className="mb-3" controlId="formEmail" >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p ><Link to='/'>Log In</Link></p>
        </div>
    )
}

export default SignUpPage
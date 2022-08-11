import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



function SignInPage({ setUser,user }) {
    const nav= useNavigate()
    const submitLogIn = (event) => {
        event.preventDefault();
        console.log('submitted LOGIN: ' + event.target[0].value, event.target[1].value);
        axios.post('/login', {
            'email': event.target[0].value,
            'password': event.target[1].value
        })
            .then((response) => {
                window.location.reload()
                console.log('response from server: ', response)
                if (response.data.success == false) {
                    alert('Failed Login')
                    console.log('failed login')
                } else {
                    nav('/Home')
                }
            })
    }
    const whoAmI = async () => {
        const response = await axios.get('/whoami')
        const user = response.data && response.data[0] && response.data[0].fields
        // console.log(response.data,response.data[0],response.data[0].fields)
        setUser(user)
        console.log('user:', user)
    }
    const submitLogOut = function (event) {
        console.log('REACT LOGOUT REQUEST')
        event.preventDefault()
        axios.post('/logout').then((response) => {
            console.log(response)
            whoAmI()
            window.location.reload()
        })
    }
    useEffect(() => {
        whoAmI()
            
    }, [])
    // console.log(user)
    return (
        < div className='LogBody'>
            <h1 className='LogMain'>Welcome To Whip Up!</h1>
            {user != null && user != undefined && user != 'undefined' ?
                nav('/Home') :
                <div>
                    <Form onSubmit={submitLogIn}>
                    <Form.Group className="mb-3" controlId="formEmail" >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Link to='/signup'>No account? Sign up Here!</Link>
            
            </div>}
        </div >    
        
    )
}

export default SignInPage
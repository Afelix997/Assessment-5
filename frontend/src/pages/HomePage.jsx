
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppNav from '../components/AppNav'



function HomePage({ setUser, user }) {
    const nav = useNavigate()
    
    const whoAmI = async () => {
        const response = await axios.get('/whoami')
        const user = response.data && response.data[0] && response.data[0].fields
        // console.log(response.data,response.data[0],response.data[0].fields)
        setUser(user)
        console.log('user:', user)
    }
    const submitLogOut = function (event) {
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

    return (
        <div>
            <AppNav/>
            {user == null || user == undefined || user == 'undefined' ?
                nav('/') :
                <div>
            <Link to={`/Meals`} >Meals </Link>
            <Link to={`/Drinks`} >Drinks </Link>
            <Link to={`/Desserts`} >Dessert </Link>
            <Link to={`/Liked`} >Saved Dishes </Link> <br />       
                    <Button onClick={submitLogOut}>Log Out!</Button>
            </div>}
        </div>    
        
    )
}

export default HomePage
import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import axios from 'axios'
import MealList from "../components/MealList"

function MealSearch() {
    
    const [searchTitle, setSearchTitle] = useState('')
    const [results, setResults] = useState([])

    const handleSubmit = (event) => {
        const value = document.getElementById('searchIn').value;
        console.log(`searching : ${value}`)
        const formVal = value.replaceAll(" ", "%20")
        setSearchTitle(formVal)
    }
    

    async function fetchQ() {
        try {
            const jsonResponse = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${searchTitle}&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98&mealType=Dinner&dishType=Main%20course&imageSize=SMALL&random=true`
            )
            console.log(jsonResponse.data.hits)
            setResults(jsonResponse.data.hits)
            
        }
        catch (error) {
            console.error('Error occurred fetching data: ', error)
        }
    }

    useEffect(() => {
        if (searchTitle != '') {
            fetchQ()
        } else {
            setResults([])
        }
    }, [searchTitle])

    return (
        <div>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <input id='searchIn' type='text'></input>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {
                    results.length > 0
                        ? <div >
                            <h2>search results</h2>
                            <hr></hr>
                            <MealList meals={results} />
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}


export default MealSearch
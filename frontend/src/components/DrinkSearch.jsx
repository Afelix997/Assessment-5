import { useState, useEffect } from "react"
import axios from 'axios'

import DrinkList from "./DrinkList"

function DrinkSearch() {
    
    const [searchTitle, setSearchTitle] = useState('') 
    const [results, setResults] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        const value = document.getElementById('searchIn').value;
        console.log(`searching : ${value}`)
        const formVal = value.replaceAll(" ", "%20")
        setSearchTitle(formVal)
        document.getElementById('searchIn').value=''
    }
    

    async function fetchQ() {
        try {
            const jsonResponse = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTitle}`
            )
            
            setResults(jsonResponse.data.drinks)
            console.log(jsonResponse.data.drinks)
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
            <br/>
            <div>
                {
                    results.length > 0
                        ? <div >
                            <h2>search results</h2>
                            <hr/>
                            <DrinkList drinks={results} />
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}


export default DrinkSearch
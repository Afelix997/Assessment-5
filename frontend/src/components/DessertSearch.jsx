import { useState, useEffect } from "react"
import axios from 'axios'
import DessertList from "../components/DessertList"

function DessertSearch() {
    
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
            const jsonResponse = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${searchTitle}%20desserts&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98&random=true`
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
            <br/>
            <div>
                {
                    results.length > 0
                        ? <div >
                            <h2>search results</h2>
                            <hr/>
                            <DessertList desserts={results} />
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}


export default DessertSearch
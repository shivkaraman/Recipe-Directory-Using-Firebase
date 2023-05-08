import './Searchbar.css'

import {  useRef, useState } from "react"
import { useHistory } from "react-router-dom";

export default function Searchbar () {
    const [query, setQuery] = useState('')
    const history = useHistory()
    const searchParam = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/search?q=${query}`)
        searchParam.current.value = '' //Clears the input field
    }

    return(
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id='search'
                    onChange={(e) => setQuery(e.target.value)}
                    ref={searchParam}
                    required
                ></input>
            </form>
        </div>
    )
}
import './Searchbar.css'

import {  useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Searchbar () {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const searchParam = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${query}`)
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
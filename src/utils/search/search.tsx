import React from "react";
import './search.scss'

interface SearchProps {
    value: string;
    setValue: (e: string) => void;
}

const Search = ({value, setValue}: SearchProps) => {
    return (
        <input className='search' value={value} onChange={(e) => setValue(e.target.value)}/>
    )
}

export default Search;
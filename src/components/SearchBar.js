import React from 'react'
import { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {

    const [inputValue, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSearch = () => {
        setSearchTerm(inputValue);
    }
    return (
        <div className='searchBar flex my-4'>
            <div className='searchBar__input w-40 border-2 border-blue-600 rounded-md mr-5'>
                <input
                    className='p-2 rounded-md w-full outline-none'
                    type='text'
                    placeholder='Enter Pokemon Name'
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>

            <button className='searchBar__button flex grow-none font-sm bg-blue-100 hover:bg-blue-300 text-blue-600 p-1 pt-2 rounded-md shadow-lg'
                onClick={handleSearch}
            >
                <span className='flex items-center md:mx-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                </span>

            </button>
        </div>

    )
}

export default SearchBar;

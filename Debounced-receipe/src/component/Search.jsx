import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/dataapi';
import Productdetails from './Productdetails';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchQuery) {
                fetchRecipes(searchQuery).then(setSuggestions);
            } else {
                setSuggestions([]);
                console.log("result not found")
            }
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

const handleSuggestionClick = (recipe) => {
    setSearchQuery(''); // Clear the search input to hide the suggestions
    setSelectedRecipe(recipe); // Set the selected recipe
    setSuggestions([]); // Clear the suggestions list
    // The suggestion list is now closed


    };

    return (
        <div className='text-center'>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes..."
                className='mb-3 py-2 px-3 rounded-pill'
            />
            {suggestions.length > 0 && (
                <ul className='bg-white text-start'>
                    {suggestions.map((recipe) => (
                        <li key={recipe.id} onClick={() => handleSuggestionClick(recipe)} className='py-1'>
                            {recipe.name}
                        </li>
                    ))}
                </ul>
            )}
            {suggestions.length === 0 && searchQuery && <p>No recipes found.</p>}
            {selectedRecipe && <Productdetails recipe={selectedRecipe} />}
            
        </div>
    );
};

export default Search;

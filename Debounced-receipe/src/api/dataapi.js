import axios from 'axios';

const API_URL = 'https://dummyjson.com/recipes/search';

export const fetchRecipes = async (query) => {
    try {
        const response = await axios.get(`${API_URL}?q=${query}`);
        console.log('Fetched recipes:', response.data.recipes); // Log the fetched recipes
        return response.data.recipes || []; // Ensure it returns an empty array if no recipes found

    } catch (error) {
        console.error('Error fetching recipes:', error);
        return []; // Return an empty array on error
    }
};

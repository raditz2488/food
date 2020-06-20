import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        console.log(searchTerm)
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
    
            setResults(response.data.businesses);
            setErrorMessage("");
        } catch(err) {
            setErrorMessage("Something went wrong.");
        }
        
        
    }

    // BAD CODE
    useEffect(
        () => {
            searchAPI('pasta')
        },
        []
    )

    return <View>
        <SearchBar 
            term={term} 
            onChangeTerm={setTerm}
            onTermSubmit={ () => searchAPI(term) }    
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null }
        <Text>Found {results.length} results.</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        
    }
);

export default SearchScreen;
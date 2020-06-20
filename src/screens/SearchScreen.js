import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    
    const [searchAPI, results, errorMessage] = useResults();


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
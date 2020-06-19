import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    return <View>
        <SearchBar 
            term={term} 
            onChangeTerm={(newTerm) => setTerm(newTerm)}
            onTermSubmit={ () => console.log('term is submitted') }    
        />
    </View>;
}

const styles = StyleSheet.create(
    {
        
    }
);

export default SearchScreen;
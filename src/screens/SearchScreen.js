import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    return <View>
        <SearchBar/>
        <Text term={term} onTermChange={(newTerm) => setTerm(newTerm)}>Search Screen</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        
    }
);

export default SearchScreen;
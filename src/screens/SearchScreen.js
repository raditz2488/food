import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

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
        <ResultsList title='Cost Efficient' results={results}/>
        <ResultsList title='Bit Pricier' results={results}/>
        <ResultsList title='Big Spender' results={results}/>        
    </View>;
}

const styles = StyleSheet.create(
    {
        
    }
);

export default SearchScreen;
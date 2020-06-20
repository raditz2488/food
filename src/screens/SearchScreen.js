import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsForPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter((result) => {
            return result.price === price
        })
    }

    return <>
        <SearchBar 
            term={term} 
            onChangeTerm={setTerm}
            onTermSubmit={ () => searchAPI(term) }    
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null }
        <ScrollView>
            <ResultsList title='Cost Efficient' results={filterResultsForPrice('$')}/>
            <ResultsList title='Bit Pricier' results={filterResultsForPrice('$$')}/>
            <ResultsList title='Big Spender' results={filterResultsForPrice('$$$')}/>   
        </ScrollView> 
    </>;
}

const styles = StyleSheet.create(
    {
        
    }
);

export default SearchScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather name='search' size={30}/>
        <Text>Search Bar</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        backgroundStyle: {
            backgroundColor: '#F0EEEE',
            height: 50,
            marginHorizontal: 15,
            borderRadius: 5
        }
    }
);

export default SearchBar;
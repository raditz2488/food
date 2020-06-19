import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather name='search' size={30}/>
        <TextInput/>
    </View>;
}

const styles = StyleSheet.create(
    {
        backgroundStyle: {
            backgroundColor: '#F0EEEE',
            height: 50,
            marginHorizontal: 15,
            borderRadius: 5,
            flexDirection: 'row'
        }
    }
);

export default SearchBar;
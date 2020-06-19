import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput placeholder='Search' style={styles.inputStyle}/>
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
        },
        inputStyle: {
            flex: 1,
            marginLeft: 15
        },
        iconStyle: {
            fontSize: 35,
            alignSelf: 'center'
        }
    }
);

export default SearchBar;
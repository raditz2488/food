import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ( { navigation } ) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    
    const getResult = async (id) => {
        const response = yelp.get(`/${id}`);
        setResult((await response).data)
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null
    }

    return <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={ ( {item} ) => {
                return <Image style={ { width: 300, height: 200 } } source={{ uri: item }} />
            } }
        />
    </View>
}

const styles = StyleSheet.create({});

export default ResultsShowScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ( { navigation } ) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    
    const getResult = async (id) => {
        const response = yelp.get(`/${id}`);
        setResult((await response).data)
    }

    return <View>
        <Text>ResultsShow</Text>
    </View>
}

const styles = StyleSheet.create({});

export default ResultsShowScreen;
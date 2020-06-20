import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({result}) => {
    return <View>
        <Image source={{ uri: result.image_url }}/>
        <Text>{result.name}</Text>
    </View>;
}

let styles = StyleSheet.create({});

export default ResultsDetail;
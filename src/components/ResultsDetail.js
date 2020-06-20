import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({result}) => {
    return <View>
        <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
        <Text>{result.name}</Text>
    </View>;
}

let styles = StyleSheet.create(
    {
        imageStyle: {
            width: 250,
            height: 120,
            borderRadius: 4
        }
    }
);

export default ResultsDetail;
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ResultsDetail = ({ result, navigation }) => {
    return <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>;
}

let styles = StyleSheet.create(
    {
        imageStyle: {
            width: 250,
            height: 120,
            borderRadius: 4,
            marginBottom: 5
        },
        nameStyle: {
            fontWeight: 'bold'
        },
        container: {
            marginLeft: 15
        }
    }
);

export default ResultsDetail;
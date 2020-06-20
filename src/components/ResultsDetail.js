import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const ResultsDetail = ({result}) => {
    return <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </TouchableOpacity>
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

export default withNavigation(ResultsDetail);
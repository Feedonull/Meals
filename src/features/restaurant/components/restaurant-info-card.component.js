import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCardInfo = ({ restaurant = {} }) => {

    const{
        name = 'Spoon Cafe',
        icon = '' ,
        photos = [
            'https://cdn.addresshotels.com/wp-content/uploads/2020/10/The-Restaurant-SV.jpg',
        ],
        address = '22 Sari St, Jeddah',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;

    return(
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }}/>
            <Text style={styles.title}>{ name }</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white'
    },
    cover: {
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        padding: 16
    }
})

export default RestaurantCardInfo;
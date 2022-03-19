import React from 'react';
import { View, Text } from 'react-native';
import Styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestaurantCard = Styled(Card)`
    backgroundColor: white;
`;
const CardCover = Styled(Card.Cover)`
    padding: 20px;
    backgroundColor: white;
`;
const Title = Styled(Text)`
    padding: 16px;
`;

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
        <RestaurantCard elevation={5}>
            <CardCover key={name} source={{ uri: photos[0] }}/>
            <Title>{ name }</Title>
        </RestaurantCard>
    )
}

export default RestaurantCardInfo;
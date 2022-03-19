import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper';
import RestaurantCardInfo from '../components/restaurant-info-card.component';

const Container = Styled(SafeAreaView)`
    flex:1;
    marginTop: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const Search = Styled(Searchbar)`
    margin: 20px
`;
const RestaurantsList = Styled(View)`
    flex: 1;
    padding: 20px;
`;

export const RestaurantsScreen = () => {
    
    return(
        <Container>
            <Search
                placeholder="Search"
            />
        <RestaurantsList >
            <RestaurantCardInfo />
        </RestaurantsList>
        </Container>
    )
}


export default RestaurantsScreen;
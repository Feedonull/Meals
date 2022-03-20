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
    margin: ${( props ) => props.theme.space[3]}
`;
const RestaurantsList = Styled(View)`
    flex: 1;
    padding: ${( props ) => props.theme.space[3]};
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
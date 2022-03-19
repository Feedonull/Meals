import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantCardInfo from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
    
    return(
        <SafeAreaView style={styles.container}>
            <Searchbar
                style={styles.searchBar}
                placeholder="Search"
            />
        <View style={styles.list}>
            <RestaurantCardInfo />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    list: {
      flex: 1,
      padding: 20
    },
    searchBar: {
      margin: 20
    }
  });

  export default RestaurantsScreen;
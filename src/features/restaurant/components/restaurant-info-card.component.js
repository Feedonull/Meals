import React from 'react';
import { View, Text, Image } from 'react-native';
import Styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer.component';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard = Styled(Card)`
    backgroundColor: white;
`;
const CardCover = Styled(Card.Cover)`
    padding: 20px;
    backgroundColor: white;
`;
const Info = Styled(View)`
    padding: ${( props ) => props.theme.space[3]}
`;
const Title = Styled(Text)`
    font-family: ${( props ) => props.theme.fonts.heading};
    font-size: ${( props ) => props.theme.fontSizes.body};
    color: ${( props ) => props.theme.colors.ui.primary}
`;
const Address = Styled(Text)`
    font-family: ${( props ) => props.theme.fonts.body};
    font-size: ${( props ) => props.theme.fontSizes.caption}
`;
const Rating = Styled(View)`
    flex-direction: row;
    padding-top: ${( props ) => props.theme.space[1]};
    padding-bottom: ${( props ) => props.theme.space[1]};
`;
const SpacerPush = Styled(View)`
    flex:1
`;

const RestaurantCardInfo = ({ restaurant = {} }) => {

    const{
        name = 'Spoon Cafe',
        icon = 'https://reactnative.dev/img/tiny_logo.png' ,
        photos = [
            'https://thumbs.dreamstime.com/z/business-sign-says-open-cafe-restaurant-hang-door-entrance-business-sign-says-open-cafe-restaurant-178396907.jpg',
        ],
        address = '22 Sari St, Jeddah',
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return(
        <RestaurantCard elevation={5}>
            <CardCover key={name} source={{ uri: photos[0] }}/>
            <Info>
                <Title>{ name }</Title>
                <Rating>
                {
                    ratingArray.map((index) => (
                        <SvgXml key={index} xml={star} width={20} height={20}/>
                    ))
                }
                <SpacerPush />
                
                {
                    isClosedTemporarily && <Text variant="label" style={{ color: "red"}}>Closed Temporeraly</Text>
                    
                }
                    <Spacer variant="right.meduim" />
                {
                    isOpenNow && <SvgXml xml={open} width={20} height={20} />
                }
                
                <Spacer variant="right.meduim" />

                <View>
                    <Image style={{ width: 16, height: 16 }} source={{ uri: icon }} />
                </View>
                
                </Rating>
                
                <Address>{ address }</Address>
            </Info>
        </RestaurantCard>
    )
}

export default RestaurantCardInfo;
import React from 'react';
import { View } from 'react-native';
import Styled from 'styled-components/native';

// Left
const LeftSmall = Styled(View)`
    margin-left: ${(props) => props.theme.space[1]};
`;
const LeftMeduim = Styled(View)`
    margin-left: ${(props) => props.theme.space[2]};
`;
const LeftLarge = Styled(View)`
    margin-left: ${(props) => props.theme.space[3]};
`;
// Right
const RightSmall = Styled(View)`
    margin-right: ${(props) => props.theme.space[1]};
`;
const RightMeduim = Styled(View)`
    margin-right: ${(props) => props.theme.space[2]};
`;
const RightLarge = Styled(View)`
    margin-right: ${(props) => props.theme.space[3]};
`;
// Top
const TopSmall = Styled(View)`
    margin-top: ${(props) => props.theme.space[1]};
`;
const TopMeduim = Styled(View)`
    margin-top: ${(props) => props.theme.space[2]};
`;
const TopLarge = Styled(View)`
    margin-top: ${(props) => props.theme.space[3]};
`;
// Bottom
const BottomSmall = Styled(View)`
    margin-bottom: ${(props) => props.theme.space[1]};
`;
const BottomMeduim = Styled(View)`
    margin-bottom: ${(props) => props.theme.space[2]};
`;
const BottomLarge = Styled(View)`
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ variant }) => {

    if( variant === 'left.small' ){
        return <LeftSmall />
    }
    if( variant === 'left.meduim' ){
        return <LeftMeduim />
    }
    if( variant === 'left.large' ){
        return <LeftLarge />
    }
    if( variant === 'right.small' ){
        return <RightMeduim />
    }
    if( variant === 'right.meduim' ){
        return <RightMeduim />
    }
    if( variant === 'right.large' ){
        return <RightLarge />
    }
    if( variant === 'top.small' ){
        return <TopSmall />
    }
    if( variant === 'top.meduim' ){
        return <TopMeduim />
    }
    if( variant === 'top.large' ){
        return <TopLarge />
    }
    if( variant === 'bottom.small' ){
        return <BottomSmall />
    }
    if( variant === 'bottom.meduim' ){
        return <BottomMeduim />
    }
    if( variant === 'bottom.large' ){
        return <BottomLarge />
    }
}
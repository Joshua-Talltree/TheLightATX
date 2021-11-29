import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchButton = () => (
    <View>
        <Icon.Button
            name="search"
            backgroundColor="#33ECFF"
        >
        </Icon.Button>
    </View>
);

const customTextButton = (
    <Icon.Button name="search" backgroundColor="#3b5998">
    </Icon.Button>
);

// const styles = StyleSheet.create({
//     text: {
//         fontFamily: 'Ariel',
//         fontSize: 7,
//     },
// });

export default SearchButton;

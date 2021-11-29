import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const SettingsButton = () => (
    <View style={styles.content}>
        <Icon.Button
            name="gear"
            color="black"
            backgroundColor="white"
        >
        </Icon.Button>
    </View>
);

const styles = StyleSheet.create({
    content: {
        alignItems:'center',
        justifyContent:'center',
    },
});


export default SettingsButton;
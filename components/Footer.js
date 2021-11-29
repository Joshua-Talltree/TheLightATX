import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Footer = () => (
    <View style={styles.footerStyle}>
        <Text style={styles.textStyle}>The Light ATX Footer</Text>
    </View>
);

const styles = StyleSheet.create({
    footerStyle: {
        width: '100%',
        height: 65,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    textStyle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        padding: 7,
    },
});

export default Footer;
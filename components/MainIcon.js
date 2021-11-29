import React from 'react';
import {View, Image, StyleSheet} from 'react-native';


const MainIcon = () => (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logo: {
        width: 150,
        height: 150,
    },
});

export default MainIcon;
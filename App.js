import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';
import MainIcon from "./components/MainIcon";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const App = () => (
    <View style={styles.container}>
        <NavBar>
        </NavBar>
        <ImageBackground source={require('./img/FB_IMG_1633457497698002.jpg')} style={styles.image}>
            <MainIcon>
            </MainIcon>
        </ImageBackground>
        <Footer>
        </Footer>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
});

export default App;
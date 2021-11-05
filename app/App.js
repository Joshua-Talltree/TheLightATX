import React, { Component } from "react";
import Header from './Header';
import {
    View,
    Text,
} from 'react-native';


class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message="Playing from the Charts"/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },
}
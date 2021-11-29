import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navbar';
import SearchButton from "./SearchButton";
import SettingsButton from "./SettingsButton";

const leftButtonConfig = {
    title: 'Settings',
    handler: () => alert('go back!'),
}

const rightButtonConfig = {
    title: 'Search',
    handler: () => alert('hello!'),
};

const titleConfig = {
    title: 'The Light ATX',
};

const NavBar = () => (
    <View style={styles.container}>
        <NavigationBar
            title={titleConfig}
            rightButton={
                <SearchButton>
                </SearchButton>
            }
            leftButton={
                <SettingsButton>
                </SettingsButton>
            }
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 80,
        marginTop: 0,
        paddingTop: 32,
        backgroundColor: "white",
    },
});

export default NavBar;


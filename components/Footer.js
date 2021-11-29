import React from 'react';
import { View, Text } from 'react-native';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';


const Footer = () => (
    <StickyHeaderFooterScrollView
        renderStickyFooter={() => (
            <View style="...">
                <Text>{`I'm a sticky footer`}</Text>
            </View>
        )}
    >
        <View style={{ height: 100, backgroundColor: '#eee' }}>
            <Text>View made scrollable</Text>
        </View>
    </StickyHeaderFooterScrollView>
)

export default Footer;
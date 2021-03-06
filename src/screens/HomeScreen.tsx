import React from 'react';
import { View, Text, Button } from 'react-native';
import Base from '../style/base';
import screen from './constant';
import { navigateTo } from '../navigation/index';

const HomeScreen = (props: any) => {

    return (
        <View style={Base.container}>
            <Text>Home Screen</Text>

            <Button
                title={screen.mobxDemo}
                onPress={navigateTo(props.componentId, screen.mobxDemo)}
            />

        </View>
    );
};

HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home',
        }
    },
    bottomTab: {
        text: 'Home'
    }
}

export default HomeScreen;
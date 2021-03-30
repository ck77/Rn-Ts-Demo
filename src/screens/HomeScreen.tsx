import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Base from '../style/base';
import screen from './constant';
import { navigateTo } from '../navigation/index';

const HomeScreen = (props: any) => {

    return (
        <View style={Base.container}>
            <Text>Home Screen</Text>

            <TouchableOpacity
                style={Base.NavigateButton}
                onPress={navigateTo(props.componentId, screen.mobxDemo)}
            >
                <Text style={Base.NavigateButtonText}>{screen.mobxDemo}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Base.NavigateButton}
                onPress={navigateTo(props.componentId, screen.productlist)}
            >
                <Text style={Base.NavigateButtonText}>{screen.productlist}</Text>
            </TouchableOpacity>

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
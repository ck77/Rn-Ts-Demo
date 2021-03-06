import React from 'react';
import { View, Text, Button } from 'react-native';
import Base from '../style/base';

const AuthScreen = (props: any) => {
    return (
        <View style={Base.container}>
            <Text>Auth Screen</Text>
        </View>
    );
};

AuthScreen.options = {
    topBar: {
        title: {
            text: 'Auth',
        }
    },
    bottomTab: {
        text: 'Auth'
    }
}

export default AuthScreen;
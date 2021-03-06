import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Base from '../style/base';
import { Navigation } from 'react-native-navigation';

const SettingScreen = (props: any) => {

    useEffect(() => {
        console.log(JSON.stringify({ ...props }));
    });

    const handlePress = () => {
        Navigation.pop(props.componentId);
    }

    return (
        <View style={Base.container}>
            <Text>Settings Screen</Text>
            <Button onPress={handlePress} title="Go Back" />
        </View>
    );
};

SettingScreen.options = {
    topBar: {
        title: {
            text: 'Setting',
        }
    },
    bottomTab: {
        text: 'Setting'
    }
}


export default SettingScreen;
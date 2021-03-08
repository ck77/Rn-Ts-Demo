import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, Button } from 'react-native';
import Base from '../../style/base';

class StyleDemoScreen extends React.Component {

    render() {
        return (
            <View><Text>StyleDemoScreen</Text></View>
        )
    }
}

export default StyleDemoScreen;
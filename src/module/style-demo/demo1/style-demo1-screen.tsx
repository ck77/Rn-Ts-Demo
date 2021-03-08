import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Base from '../../../style/base';

class StyleDemo1 extends React.Component {

    render() {
        return (
            <View style={Base.container}>
                <Image style={Base.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

                <Text style={Base.fontSize28}>Welcome</Text>

                <View style={Base.bottom}>
                    <TouchableOpacity
                        style={Base.NavigateButton}
                        onPress={() => { }}
                    >
                        <Text style={Base.NavigateButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

export default StyleDemo1;
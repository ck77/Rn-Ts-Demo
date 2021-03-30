import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Base from '../../style/base';

class ItemCell extends React.Component {

    render() {
        return (
            <View>
                <Text style={Base.fontSize28}>Sponsored</Text>
            </View>
        )
    }
}

export default ItemCell;
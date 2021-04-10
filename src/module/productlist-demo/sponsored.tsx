import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Base from '../../style/base';
import { ProductListStore } from './productlist.store';

interface IProps {
    store: ProductListStore;
}

@inject(({ store }: { store: ProductListStore }) => ({ store }))
@observer
class Sponsored extends React.Component<IProps> {
    static defaultProps = { store: {} };

    render() {

        const { store } = this.props;

        return (
            <View style={styles.container} onLayout={({ nativeEvent }) => { store.setMeasurements(nativeEvent.layout) }}>
                <Text style={Base.fontSize28}>Sponsored</Text>
                <Text>{store.measurements.width}</Text>
            </View>
        )
    }
}

export default Sponsored;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange'
    }
});
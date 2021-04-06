import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Base from '../../style/base';
import { ItemDetail } from './model';

interface IProps extends ItemDetail { }

class ItemCell extends React.Component<IProps> {

    render() {

        const { title, price } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.price}>
                    <Text style={Base.fontSize28}>{title}</Text>
                    <Text style={Base.fontSize28}>{price}</Text>
                </View>
                <View style={styles.operationContainer}>
                    <View><Text>More</Text></View>
                    <View style={styles.operation}>
                        <Text style={styles.button}>AAAAA</Text>
                        <Text style={styles.button}>BBBB</Text>
                        <Text style={styles.button}>CCCC</Text>
                        <Text style={styles.button}>DD</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default ItemCell;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: 'yellow',
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    operationContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    operation: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        marginHorizontal: 5
    }
});
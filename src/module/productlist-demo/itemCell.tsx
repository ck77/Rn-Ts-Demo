import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, UIManager, findNodeHandle } from 'react-native';
import Base from '../../style/base';
import { ItemDetail } from './model';
import OButton from './OButton';
import OrderOperation from './orderOperation';

interface IProps extends ItemDetail { }

class ItemCell extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    render() {

        const { price, title } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.price}>
                    <Text style={Base.fontSize28}>{title}</Text>
                    <Text style={Base.fontSize28}>{` : `}</Text>
                    <Text style={Base.fontSize28}>{price}</Text>
                    {/* <Text style={Base.fontSize28}>{` : `}</Text> */}
                    {/* <Text style={Base.fontSize28}>{this.state.operationWidth}</Text> */}

                </View>

                <OrderOperation {...this.props} />
            </View>
        )
    }
}

export default ItemCell;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 10,
        // padding: 10,
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
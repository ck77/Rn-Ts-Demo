import React, { useEffect } from 'react';
import { Provider, observer, inject, Observer } from 'mobx-react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ProductListStore } from './productlist.store';
import Base from '../../style/base';
import Sponsored from './sponsored';

interface IProps {
    store: ProductListStore;
}


@inject(({ store }: { store: ProductListStore }) => ({ store }))
@observer
class ProductList extends React.Component<IProps> {
    static defaultProps = { store: {} }


    render() {

        const { store } = this.props;

        return (
            <View style={Base.container}>

                {/* top sponsored brand */}
                <Sponsored />

                <Text>{store.count}</Text>

                <TouchableOpacity onPress={store.add}>
                    <Text>Add</Text>
                </TouchableOpacity>

                {/* itemList */}

                {/* bottom sponsored brand */}

                <Text>Hello</Text>
            </View>
        )
    }
}

export default ProductList;
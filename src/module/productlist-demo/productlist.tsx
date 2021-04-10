import React, { useEffect } from 'react';
import { observable, action, computed, autorun, reaction } from "mobx";
import { Provider, observer, inject, Observer } from 'mobx-react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, StatusBar, FlatList } from 'react-native';
import { ProductListStore } from './productlist.store';
import Base from '../../style/base';
import Sponsored from './sponsored';
import ItemCell from './itemCell';
import { ItemDetail } from './model';

interface IProps {
    store: ProductListStore;
}

interface IState {
    showTip: boolean
}

@inject(({ store }: { store: ProductListStore }) => ({ store }))
@observer
class ProductList extends React.Component<IProps, IState> {
    static defaultProps = { store: {} };

    constructor(props: IProps) {
        super(props);

        autorun(() => {
            this.props.store.getList();
        })

        this.state = {
            showTip: false
        }
    }

    renderItem = ({ item }: any) => {

        const itemDetail = item as ItemDetail;

        return (
            <ItemCell {...itemDetail} />
        )
    }

    render() {

        const { store } = this.props;

        return (
            <View style={Base.container}>

                {/* top sponsored brand */}
                <Sponsored />

                {/* itemList */}

                <FlatList
                    data={store.itemList}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.itemNumber}
                />

                {/* bottom sponsored brand */}
                <Sponsored />

            </View>
        )
    }
}

export default ProductList;
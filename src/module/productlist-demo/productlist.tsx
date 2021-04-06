import React, { useEffect } from 'react';
import { observable, action, computed, autorun, reaction } from "mobx";
import { Provider, observer, inject, Observer } from 'mobx-react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ProductListStore } from './productlist.store';
import Base from '../../style/base';
import Sponsored from './sponsored';
import ItemCell from './itemCell';

interface IProps {
    store: ProductListStore;
}

@inject(({ store }: { store: ProductListStore }) => ({ store }))
@observer
class ProductList extends React.Component<IProps> {
    static defaultProps = { store: {} };

    constructor(props: IProps) {
        super(props);

        autorun(() => {
            this.props.store.getList();
        })
    }


    render() {

        const { store } = this.props;

        return (
            <View style={Base.container}>

                {/* top sponsored brand */}
                <Sponsored />

                {/* itemList */}
                <ScrollView>
                    {
                        store.itemList.map((item, value) => {
                            return (
                                <ItemCell key={item.itemNumber} {...item} />
                            )
                        })
                    }

                </ScrollView>

                {/* bottom sponsored brand */}

                <Text>Hello</Text>
            </View>
        )
    }
}

export default ProductList;
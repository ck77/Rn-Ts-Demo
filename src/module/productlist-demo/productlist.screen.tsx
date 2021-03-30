import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Base from '../../style/base';
import { productListStore } from './productlist.store';
import ProductList from './productlist';

class ProductListScreen extends React.Component {

    render() {
        return (
            <Provider store={productListStore}>
                <ProductList />
            </Provider>
        )
    }
}

export default ProductListScreen;

const styles = StyleSheet.create({


});
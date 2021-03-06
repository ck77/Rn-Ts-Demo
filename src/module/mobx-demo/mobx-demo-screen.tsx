import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, Button } from 'react-native';
import Base from '../../style/base';
import { AppStore } from './store';
import Count from './count';
import Product from './product';

class MobxDemoScreen extends React.Component {


    render() {
        return (
            <Provider {...AppStore}>
                {/* <Count /> */}
                <Product />
            </Provider>
        )
    }
}

export default MobxDemoScreen;
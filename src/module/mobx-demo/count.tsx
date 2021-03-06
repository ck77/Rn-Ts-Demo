import React, { useEffect } from 'react';
import { observable } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, Button } from 'react-native';
import Base from '../../style/base';
import { CountStore, IAppStore } from './store';

interface IProps {
    store: CountStore
}

@inject((appStore: IAppStore) => ({ store: appStore.countStore }))
@observer
class Count extends React.Component<IProps> {
    static defaultProps = { store: {} }

    @observable localCount: number = 0;

    render() {
        const { store } = this.props;

        return (
            <View>
                <Text>{store.count}</Text>
                <Text>{this.localCount}</Text>

                <Button title='add' onPress={store.add}></Button>
                <Button title='localAdd' onPress={() => this.localCount++}></Button>

            </View>
        )
    }

}

export default Count
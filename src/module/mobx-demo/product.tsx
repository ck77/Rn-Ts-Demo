import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Pressable, Modal, TextInput, TouchableOpacity } from 'react-native';
import Base from '../../style/base';
import { ProductStore, IAppStore } from './store';
import FModal from './fModal';
import CModal from './cModal';

interface IProps {
    store: ProductStore
}

@inject((appStore: IAppStore) => ({ store: appStore.productStore }))
@observer
class Product extends React.Component<IProps> {
    static defaultProps = { store: {} }

    handleAddToCart = () => {
        if (this.props.store.isValidDeliveryInfo) {
            console.log('Add to Cart')
        } else {
            this.props.store.setShowModal(true)
        }
    }

    render() {
        const { store } = this.props;

        return (
            <View style={Base.container}>
                <Text style={styles.section}>Product page</Text>

                <Text>{`Delivery Date: ${store.deliveryDate}`}</Text>
                <Text>{`Gift Message: ${store.giftMessage}`}</Text>
                <TouchableOpacity style={Base.NavigateButton} onPress={() => store.setShowModal(true)}>
                    <Text style={Base.NavigateButtonText}>Open Modal</Text>
                </TouchableOpacity>

                {/* function component need pass store */}
                {/* <FModal store={store} /> */}

                {/* class component need not pass store */}
                <CModal />

                <TouchableOpacity style={styles.button} onPress={this.handleAddToCart}>
                    <Text style={styles.buttonText}>Buy It Now</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Product;

const styles = StyleSheet.create({
    // centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 22
    // },
    section: {
        marginVertical: 20
    },
    button: {
        borderRadius: 10,
        margin: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 40, // shadow for Android
        backgroundColor: '#406E9F',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
    // buttonOpen: {
    //     backgroundColor: "#F194FF",
    // },
    // buttonClose: {
    //     backgroundColor: "#2196F3",
    // },
    // textStyle: {
    //     color: "white",
    //     fontWeight: "bold",
    //     textAlign: "center"
    // },
    // modalText: {
    //     marginBottom: 15,
    //     textAlign: "center"
    // }
});
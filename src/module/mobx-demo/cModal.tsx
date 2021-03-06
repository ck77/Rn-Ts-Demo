import React, { useEffect, useState } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Pressable, Modal, TextInput } from 'react-native';
import Base from '../../style/base';
import { ProductStore, IAppStore } from './store';
import { observable } from 'mobx';

interface IProps {
    store: ProductStore
}

interface IState {
    deliveryDate: string;
    giftMessage: string;
}

@inject((appStore: IAppStore) => ({ store: appStore.productStore }))
@observer
class CModal extends React.Component<IProps, IState> {
    static defaultProps = { store: {} }

    constructor(props: IProps) {
        super(props);

        this.state = {
            deliveryDate: props.store.deliveryDate,
            giftMessage: props.store.giftMessage
        }
    }

    private handleClose = () => {
        this.props.store.setShowModal(false);
        this.props.store.UpdateDeliveryInfo(this.state.deliveryDate, this.state.giftMessage);
    }

    private handleDeliveryDate = (text: string) => {
        this.setState({ deliveryDate: text });
    }

    private handleGiftMessage = (text: string) => {
        this.setState({ giftMessage: text });
    }

    render() {

        const { store } = this.props;

        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={store.showModal}
                onRequestClose={() => console.log('qqqqqqqqqqqqqqq')}
            >
                <View style={Base.container}>
                    <View style={styles.modalView}>
                        <Pressable onPress={this.handleClose}>
                            <Text>Hide C Modal</Text>
                        </Pressable>

                        <TextInput
                            placeholder='Delivery Date'
                            onChangeText={text => this.handleDeliveryDate(text)}
                            value={this.state.deliveryDate}
                        />
                        <TextInput
                            placeholder='Gift Message'
                            onChangeText={text => this.handleGiftMessage(text)}
                            value={this.state.giftMessage}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

export default CModal;

const styles = StyleSheet.create({
    // centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 22
    // },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    // button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2
    // },
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
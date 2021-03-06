import React, { useEffect, useState } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Pressable, Modal, TextInput } from 'react-native';
import Base from '../../style/base';
import { ProductStore } from './store';
import { observable } from 'mobx';

interface IProps {
    store: ProductStore
}

const FModal = ({ store }: IProps) => {
    const [deliveryDate, setDeliveryDate] = useState(store.deliveryDate);
    const [giftMessage, setGiftMessage] = useState(store.giftMessage);

    const handleClose = () => {
        store.setShowModal(false);
        store.UpdateDeliveryInfo(deliveryDate, giftMessage);
    }

    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={store.showModal}
            onRequestClose={() => console.log('qqqqqqqqqqqqqqq')}
        >
            <View style={Base.container}>
                <View style={styles.modalView}>
                    <Pressable onPress={handleClose}>
                        <Text>Hide F Modal</Text>
                    </Pressable>

                    <TextInput
                        placeholder='Delivery Date'
                        onChangeText={text => setDeliveryDate(text)}
                        value={deliveryDate}
                    />
                    <TextInput
                        placeholder='Gift Message'
                        onChangeText={text => setGiftMessage(text)}
                        value={giftMessage}
                    />

                </View>
            </View>

        </Modal>
    )

}

export default observer(FModal);

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
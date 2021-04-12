import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, StatusBar, FlatList } from 'react-native';

interface IProps {
    brandList: Array<{ index: number, title: string, image: string, storeName: string }>
}

const SponsoreBrand = ({ brandList }: IProps) => {

    // if (!!brandList) return;

    return (
        <View style={styles.container}>
            {
                brandList.map(({ index, title, image, storeName }) => {
                    return (
                        <View key={index} style={styles.brand}>
                            <Text>{title}</Text>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: image
                                }}
                            />
                            <Text>{storeName}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default SponsoreBrand;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2',
        flexDirection: 'row'
    },
    brand: {
        margin: 10
    },
    image: {
        width: 50,
        height: 50,
    }

});
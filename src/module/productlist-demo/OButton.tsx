import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, StatusBar, FlatList } from 'react-native';

interface IOButtonProps {
    isMore?: boolean;
    text: string;
    pressfn: () => void;
}

interface IOButtonState {
    measurements: IMeasurements;
}

interface IMeasurements {
    x: number,
    y: number,
    width: number;
    height: number;
}

class OButton extends React.Component<IOButtonProps, IOButtonState> {
    constructor(props: IOButtonProps) {
        super(props);

        this.state = {
            measurements: { x: 0, y: 0, width: 0, height: 0 }
        }
    }

    getWidth() {
        return this.state.measurements.width;
    }

    render() {

        const { isMore, text, pressfn } = this.props;

        return (
            <View
                style={isMore ? styles.more : styles.button}
                onLayout={({ nativeEvent }) => {
                    this.setState({ measurements: nativeEvent.layout })
                }}
            >
                <TouchableOpacity onPress={() => pressfn()}>
                    <Text>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const withStyle = (Component: any) => {
    return class extends React.Component {
        render() {
            return <Component {...this.props} />
        }
    }
}

const WithStyleOButton = withStyle(OButton);

export { OButton, WithStyleOButton }

const styles = StyleSheet.create({
    button: {
        //marginTop: 16,
        // paddingVertical: 8,
        marginLeft: 8,
        paddingLeft: 15,
        paddingRight: 15,
        padding: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    more: {

    }
})
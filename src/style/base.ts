import { StyleSheet } from 'react-native';

const Base = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 10
    },
    NavigateButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    NavigateButtonText: {
        color: "white",
        fontWeight: "bold",
    },
    Image: {},
    logo: {
        width: 66,
        height: 66,
    },
    fontSize28: {
        fontSize: 28
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    }
});

export default Base;
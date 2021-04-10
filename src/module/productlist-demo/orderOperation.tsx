import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, UIManager, findNodeHandle } from 'react-native';
import Tooltip from "react-native-walkthrough-tooltip";
import { ItemDetail } from './model';
import OButton from './OButton';

interface IProps extends ItemDetail { }

interface IState {
    showTip: boolean;
    showMore: boolean;
    containerWidth: number;
    operationWidth: number;
}

class OrderOperation extends React.Component<IProps, IState> {

    private ref_writeReview: any;
    private ref_cancel: any;
    private ref_replace: any;
    private ref_requestSellerEmail: any;
    private ref_return: any;

    constructor(props: IProps) {
        super(props);

        this.state = {
            showTip: false,
            showMore: false,
            containerWidth: 0,
            operationWidth: 0
        }
    }

    componentDidMount() {
        let width = 0;

        setTimeout(() => {

            if (this.ref_writeReview) {
                width += this.ref_writeReview.getWidth();
            }

            if (this.ref_cancel) {
                width += this.ref_cancel.getWidth();
            }

            if (this.ref_replace) {
                width += this.ref_replace.getWidth();
            }

            if (this.ref_requestSellerEmail) {
                width += this.ref_requestSellerEmail.getWidth();
            }

            if (this.ref_return) {
                width += this.ref_return.getWidth();
            }

            this.setState({ operationWidth: width });

        }, 1000);
    }

    renderMoreBtn = () => {
        return (
            <View style={styles.more}>
                <Tooltip
                    isVisible={this.state.showTip}
                    content={
                        <View style={styles.moreContainer}>
                            <Text style={styles.moreButton}> I am a tooltip </Text>
                            <Text style={styles.moreButton}> I am a tooltip </Text>
                            <Text style={styles.moreButton}> I am a tooltip </Text>
                        </View>
                    }
                    onClose={() => this.setState({ showTip: false })}
                    placement="top"
                    // below is for the status bar of react navigation bar
                    topAdjustment={Platform.OS === 'android' ? 56 : 0}
                    backgroundColor={'transparent'}
                >
                    <TouchableOpacity
                        // style={[{ backgroundColor: 'yellow', width: '100%', marginTop: 50 }]}
                        onPress={() => this.setState({ showTip: true })}
                    >
                        <Text>More</Text>
                    </TouchableOpacity>
                </Tooltip>
            </View>
        )
    }

    renderOperation = () => {

        const { showCancel, showReplace, showRequestSellerEmail, showReturn, showWriteReview } = this.props;

        return (
            <View style={styles.operation}>
                {
                    showWriteReview && <OButton ref={ref => this.ref_writeReview = ref} text='WriteReview' pressfn={() => { }} />
                }
                {
                    showCancel && <OButton ref={ref => this.ref_cancel = ref} text='Cancel' pressfn={() => { }} />
                }
                {
                    showReplace && <OButton ref={ref => this.ref_replace = ref} text='Replace' pressfn={() => { }} />
                }
                {
                    showRequestSellerEmail && <OButton ref={ref => this.ref_requestSellerEmail = ref} text='RequestSellerEmail' pressfn={() => { }} />
                }
                {
                    showReturn && <OButton ref={ref => this.ref_return = ref} text='Return' pressfn={() => { }} />
                }

            </View>
        )
    }

    render() {
        const { showMore, containerWidth, operationWidth } = this.state;

        return (
            <View>
                <Text>{containerWidth}</Text>
                <Text>{operationWidth}</Text>


                <View
                    style={[styles.container, showMore && { justifyContent: 'space-between' }]}
                    onLayout={({ nativeEvent }) => {
                        this.setState({ containerWidth: nativeEvent.layout.width });
                    }}
                >
                    {this.state.showMore && this.renderMoreBtn()}
                    {this.renderOperation()}
                </View>
            </View>

        )
    }
}

export default OrderOperation;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    more: {
        justifyContent: 'center'
    },
    moreContainer: {
    },
    moreButton: {
        margin: 3,
        // padding: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    operation: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        //marginTop: 16,
        // paddingVertical: 8,
        marginLeft: 8,
        padding: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
});
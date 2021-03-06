import React, { useEffect } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, UIManager, findNodeHandle } from 'react-native';
import Tooltip from "react-native-walkthrough-tooltip";
import { ItemDetail } from './model';
import { OButton, WithStyleOButton } from './OButton';

interface IProps extends ItemDetail { }

interface IState {
    showTip: boolean;
    showMore: boolean;
    containerWidth: number;
    operationWidth: number;
    moreLayout: { x: number, y: number, width: number, height: number };
    orderOperationLayout: { x: number, y: number, width: number, height: number };
    containerPageY: number;

    showCancel: boolean;
    showReplace: boolean;
    showRequestSellerEmail: boolean;
    showReturn: boolean;
    showWriteReview: boolean;

    showMoreCancel: boolean;
    showMoreReplace: boolean;
    showMoreRequestSellerEmail: boolean;
    showMoreReturn: boolean;
    showMoreWriteReview: boolean;
}

class OrderOperation extends React.Component<IProps, IState> {

    private ref_container: any;

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
            operationWidth: 0,
            moreLayout: { x: 0, y: 0, width: 0, height: 0 },
            orderOperationLayout: { x: 0, y: 0, width: 0, height: 0 },
            containerPageY: 0,

            showCancel: this.props.showCancel,
            showReplace: this.props.showReplace,
            showRequestSellerEmail: this.props.showRequestSellerEmail,
            showReturn: this.props.showReturn,
            showWriteReview: this.props.showWriteReview,

            showMoreCancel: false,
            showMoreReplace: false,
            showMoreRequestSellerEmail: false,
            showMoreReturn: false,
            showMoreWriteReview: false,
        }
    }

    checkShowMore = (width: number) => {
        return this.state.containerWidth < width;
    }

    componentDidMount() {
        let width = 0;
        let showMore = false;

        setTimeout(() => {


            if (this.ref_writeReview) {
                width += this.ref_writeReview.getWidth();
                showMore = this.checkShowMore(width);

                if (showMore) {
                    this.setState({ showWriteReview: false, showMoreWriteReview: true });
                }
            }

            if (this.ref_cancel) {
                width += this.ref_cancel.getWidth();
                showMore = this.checkShowMore(width);

                if (showMore) {
                    this.setState({ showCancel: false, showMoreCancel: true });
                }
            }

            if (this.ref_replace) {
                width += this.ref_replace.getWidth();
                showMore = this.checkShowMore(width);

                if (showMore) {
                    this.setState({ showReplace: false, showMoreReplace: true });
                }
            }

            if (this.ref_requestSellerEmail) {
                width += this.ref_requestSellerEmail.getWidth();
                showMore = this.checkShowMore(width);

                if (showMore) {
                    this.setState({ showRequestSellerEmail: false, showMoreRequestSellerEmail: true });
                }
            }

            if (this.ref_return) {
                width += this.ref_return.getWidth();
                showMore = this.checkShowMore(width);

                if (showMore) {
                    this.setState({ showReturn: false, showMoreReturn: true });
                }
            }

            this.setState({
                showMore,
                operationWidth: width
            });

        }, 500);



    }

    onMorePress = () => {

        const handle = findNodeHandle(this.ref_container);
        if (handle) {
            UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
                this.setState({ containerPageY: pageY })
            })
        }

        this.setState({ showTip: true })
    }

    renderMoreBtn = () => {

        return (
            <Tooltip
                isVisible={this.state.showTip}
                content={this.renderMoreBtnContent()}
                onClose={() => this.setState({ showTip: false })}
                placement={this.state.containerPageY < 0 ? 'bottom' : 'top'}
                // below is for the status bar of react navigation bar
                topAdjustment={Platform.OS === 'android' ? 56 : 0}
                backgroundColor={'transparent'}

                // tooltip ??? more ?????????
                childContentSpacing={4}

                // { top: 24, bottom: 24, left: 24, right: 24 }
                displayInsets={{ top: 24, bottom: 24, left: 10, right: 24 }}
            >
                <TouchableOpacity
                    // style={[{ paddingLeft: 10 }]}
                    onPress={() => this.onMorePress()}
                >
                    <Text>More</Text>
                </TouchableOpacity>
            </Tooltip>
        )
    }

    renderMoreBtnContent = () => {
        const { showMoreCancel, showMoreReplace, showMoreRequestSellerEmail, showMoreReturn, showMoreWriteReview } = this.state;

        return (
            <View style={styles.moreContainer}>
                {
                    showMoreWriteReview &&
                    <OButton
                        isMore
                        ref={ref => this.ref_writeReview = ref}
                        text='WriteReview'
                        pressfn={() => console.log('WriteReview')}
                    />
                }
                {
                    showMoreCancel && <OButton isMore ref={ref => this.ref_cancel = ref} text='Cancel' pressfn={() => { }} />
                }
                {
                    showMoreReplace && <OButton isMore ref={ref => this.ref_replace = ref} text='Replace' pressfn={() => { }} />
                }
                {
                    showMoreRequestSellerEmail && <OButton isMore ref={ref => this.ref_requestSellerEmail = ref} text='RequestSellerEmail' pressfn={() => { }} />
                }
                {
                    showMoreReturn && <OButton isMore ref={ref => this.ref_return = ref} text='Return' pressfn={() => { console.log('Return') }} />
                }
            </View>
        )
    }

    renderOperation = () => {

        const { showCancel, showReplace, showRequestSellerEmail, showReturn, showWriteReview } = this.state;

        return (
            <View
                style={styles.operation}
                onLayout={({ nativeEvent }) => {
                    this.setState({ containerWidth: nativeEvent.layout.width });
                }}
            >
                {
                    showWriteReview && <OButton ref={ref => this.ref_writeReview = ref} text='WriteReview' pressfn={() => console.log('WriteReview')} />
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
        const { showMore, containerWidth, operationWidth, orderOperationLayout, moreLayout, containerPageY } = this.state;



        return (
            <View
                ref={ref => this.ref_container = ref}
                onLayout={({ nativeEvent }) => {
                    this.setState({ orderOperationLayout: nativeEvent.layout })
                }}
            >
                <Text>orderOperationLayout: {orderOperationLayout.x} {orderOperationLayout.y}</Text>
                <Text>operation container : {containerWidth}</Text>
                <Text>operation btn width: {operationWidth}</Text>
                <Text>containerPageY : {containerPageY}</Text>

                <View
                    style={[styles.container, showMore && { justifyContent: 'space-between' }]}
                >
                    <View
                        style={styles.more}
                        onLayout={({ nativeEvent }) => {
                            this.setState({ moreLayout: nativeEvent.layout })
                        }}>
                        {this.state.showMore && this.renderMoreBtn()}
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        flex: 1 / 8,
        // marginLeft: 10
    },
    operation: {
        flexDirection: 'row-reverse',
        // backgroundColor: 'orange',
        flex: 7 / 8
    },
    moreContainer: {
        justifyContent: 'center'
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
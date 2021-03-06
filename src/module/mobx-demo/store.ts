import { observable, action, computed } from 'mobx';

export class CountStore {
    @observable count: number = 0;

    @action.bound add = () => {
        this.count++;
    }
}

export class ProductStore {
    @observable deliveryDate: string = '';
    @observable giftMessage: string = '';

    @observable showModal: boolean = false;

    ///////////////////////////////////////////////

    @computed get isValidDeliveryInfo() {
        return this.deliveryDate && this.giftMessage;
    }

    ///////////////////////////////////////////////

    @action.bound setShowModal = (show: boolean) => {
        this.showModal = show;
    }

    @action.bound UpdateDeliveryInfo = (deliveryDate: string, giftMessage: string) => {
        this.deliveryDate = deliveryDate;
        this.giftMessage = giftMessage;
    }
}

export interface IAppStore {
    countStore: CountStore;
    productStore: ProductStore;
}

export const AppStore: IAppStore = {
    countStore: new CountStore(),
    productStore: new ProductStore()
}
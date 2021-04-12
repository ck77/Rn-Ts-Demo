import { observable, action, computed, autorun, reaction } from "mobx";
import { Provider, observer, inject } from 'mobx-react';
import { ItemDetail } from './model';
import { ItemListData } from './fakeData';

class ProductListStore {
    @observable itemList: Array<any> = [];

    @observable measurements: any = {};

    @action setMeasurements = (measurements: any) => {
        this.measurements = measurements;
    }

    @action getList = () => {
        this.itemList = ItemListData;
    }
}

const productListStore = new ProductListStore();

export { ProductListStore, productListStore }
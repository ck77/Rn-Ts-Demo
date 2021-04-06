import { observable, action, computed, autorun, reaction } from "mobx";
import { Provider, observer, inject } from 'mobx-react';
import { ItemDetail } from './model';

class ProductListStore {
    @observable itemList: Array<ItemDetail> = [];

    @action getList = () => {

        let list: Array<ItemDetail> = [];
        list.push({ itemNumber: '000-001', title: 'notebook', price: 50 });
        list.push({ itemNumber: '000-002', title: 'flower', price: 10 });
        list.push({ itemNumber: '000-003', title: 'ps5', price: 40 });
        list.push({ itemNumber: '000-004', title: 'ipad', price: 70 });
        list.push({ itemNumber: '000-005', title: 'CH-R', price: 10000 });
        list.push({ itemNumber: '000-006', title: 'orange', price: 20000 });
        list.push({ itemNumber: '000-007', title: 'cat', price: 30 });
        list.push({ itemNumber: '000-008', title: 'mouse', price: 5 });


        this.itemList = list;

    }
}

const productListStore = new ProductListStore();

export { ProductListStore, productListStore }
import { observable, action, computed, autorun, reaction } from "mobx";
import { Provider, observer, inject } from 'mobx-react';

class ProductListStore {
    @observable count: number = 0;

    @action add = () => {
        this.count++;
    }
}

const productListStore = new ProductListStore();

export { ProductListStore, productListStore }
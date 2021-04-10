import { ItemDetail } from './model';

const ItemListData: Array<ItemDetail> = [
    {
        itemNumber: '000-001',
        title: 'notebook',
        price: 50,
        showWriteReview: true,
        showCancel: true,
        showReplace: true,
        showRequestSellerEmail: true,
        showReturn: false,
    },
    {
        itemNumber: '000-002',
        title: 'flower',
        price: 10,
        showWriteReview: false,
        showCancel: true,
        showReplace: false,
        showRequestSellerEmail: false,
        showReturn: false,
    },
    {
        itemNumber: '000-003',
        title: 'ps5',
        price: 40,
        showWriteReview: false,
        showCancel: false,
        showReplace: true,
        showRequestSellerEmail: false,
        showReturn: false,
    },
    {
        itemNumber: '000-004',
        title: 'ipad',
        price: 70,
        showWriteReview: false,
        showCancel: false,
        showReplace: true,
        showRequestSellerEmail: false,
        showReturn: false,
    },
    {
        itemNumber: '000-005',
        title: 'CH-R',
        price: 9000,
        showWriteReview: false,
        showCancel: false,
        showReplace: false,
        showRequestSellerEmail: true,
        showReturn: false,
    },
]

export { ItemListData }
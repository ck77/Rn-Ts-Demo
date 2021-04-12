import { ItemDetail } from './model';

const ItemListData: Array<any> = [
    {
        index: 1,
        type: 'item',
        itemNumber: '000-001',
        title: 'notebook',
        price: 50,
        showWriteReview: true,
        showCancel: true,
        showReplace: true,
        showRequestSellerEmail: true,
        showReturn: true,
    },
    {
        index: 2,
        type: 'item',
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
        index: 3,
        type: 'brand',
        brandList: [
            {
                index: 1,
                title: 'asus asus asus',
                image: 'https://c1.neweggimages.com/ProductImageCompressAll300/ANGPS201203iR23T.jpg',
                storeName: 'asus'
            },
            {
                index: 2,
                title: 'amd amd amd',
                image: 'https://c1.neweggimages.com/ProductImageCompressAll300/ANGPS201216GqWkj.jpg',
                storeName: 'amd'
            },
            {
                index: 3,
                title: 'intel intel intel',
                image: 'https://c1.neweggimages.com/ProductImageCompressAll300/1TS-00BK-00040-S01.jpg',
                storeName: 'intel'
            }
        ]

    },
    {
        index: 4,
        type: 'item',
        itemNumber: '000-005',
        title: 'CH-R',
        price: 9000,
        showWriteReview: true,
        showCancel: true,
        showReplace: true,
        showRequestSellerEmail: true,
        showReturn: false,
    },
    {
        index: 5,
        type: 'item',
        itemNumber: '000-003',
        title: 'ps5',
        price: 40,
        showWriteReview: false,
        showCancel: false,
        showReplace: true,
        showRequestSellerEmail: false,
        showReturn: false,
    },
]

export { ItemListData }
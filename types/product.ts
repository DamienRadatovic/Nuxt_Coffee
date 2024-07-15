export interface Product {
    id: number,
    name: string,
    price: number,
    type: ProductType,
    size: number,
    image: string,
    description: string,
    ordersNumber: number
}

export enum ProductType {
    COFFEE = 'COFFEE',
    DESSERTS = 'DESSERTS',
    SALADS = 'SALADS'
}

export enum ProductPayment {
    AT_TABLE = 'AT_TABLE',
    ONLINE = 'ONLINE',
    AT_COUNTER = 'AT_COUNTER'
}

export enum PutDown {
    FORK = 'FORK',
    SALT = 'SALT',
    NAPKINS = 'NAPKINS'
}
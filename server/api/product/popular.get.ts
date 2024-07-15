import productList from '~/config/simulate-db';
import type { Product } from '~/types';

export default defineEventHandler(async (event): Promise<Product[]> => {
    const filteredList: Product[] = productList.filter((product: Product) => product.ordersNumber > 10);
    console.log(filteredList);
    return filteredList;
})
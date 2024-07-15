import productList from '~/config/simulate-db';
import type { Product } from '~/types';

export default defineEventHandler(async (event): Promise<Product[]> => {
    const { type } = getQuery(event);
    return productList.filter((product: Product) => product.type === type);
})
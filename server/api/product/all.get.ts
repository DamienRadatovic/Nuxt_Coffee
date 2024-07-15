import productList from '~/config/simulate-db';
import type { Product } from '~/types';

export default defineEventHandler(async (event): Promise<Product[]> => {
    return productList;
})
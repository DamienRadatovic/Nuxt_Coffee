import { defineStore } from 'pinia';
import {type Product, ProductPayment, PutDown} from '~/types';

export interface SelectProduct {
    product: Product,
    number: number,
}

export interface Customer {
    name: string|null,
    tableNumber: number|null,
}

export const useModalStore = defineStore('modal', () => {
    const isOpenModal = ref<boolean>(false);
    const selectedProducts = ref<SelectProduct[]>([]);
    const customer = ref<Customer>({
        name: null,
        tableNumber: null,
    });
    const paymentOption = ref<ProductPayment>(ProductPayment.AT_TABLE);
    const paymentPutDown = ref<PutDown[]>([]);

    const changeModalState = (): void => {
        isOpenModal.value = !isOpenModal.value;
    };

    const isProductInStore = (productId: number): number => selectedProducts.value.findIndex((selectedProduct) => selectedProduct.product.id === productId);
    const findProductInStore = (productId: number) => selectedProducts.value.find((selectedProduct) => selectedProduct.product.id === productId);

    const addProduct = (product: Product): void => {
        const presentProduct = isProductInStore(product.id);
        if (isProductInStore(product.id) !== -1) {
            selectedProducts.value[presentProduct].number += 1;
        } else {
            selectedProducts.value.push({
                product,
                number: 1,
            })
        }
    };

    const totalOrder = computed<number>(() => {
        return selectedProducts.value.reduce((sum, current) => sum + (current.product.price * current.number), 0);
    });

    return {
        selectedProducts,
        isOpenModal,
        customer,
        paymentOption,
        paymentPutDown,
        changeModalState,
        addProduct,
        isProductInStore,
        findProductInStore,
        totalOrder,
    }
})
<script setup lang="ts">
import { type Product, ProductType } from '@/types';

interface Props {
  productList: Product[],
}

const modalStore = useModalStore();

const addShowingNumber = 8;

const productNumber = ref<number>(addShowingNumber);

const props = defineProps<Props>();

const addProduct = (product: Product): void => {
  modalStore.addProduct(product);
}

const expandList = async (): Promise<void> => {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const myAsyncFunc = async (): Promise<boolean> => {
    productNumber.value += 1;
    return true;
  };

  for (let i = 1; i <= addShowingNumber; i += 1) {
    await myAsyncFunc();
    await delay(100);
  }
};

watch(
    () => props.productList,
    () => {
      productNumber.value = addShowingNumber;
    },
    { deep: true },
);
</script>

<template>
  <div class="product-list-main">
    <div class="product-list">
      <div
          class="product"
          v-for="(product, index) in props.productList.slice(0, productNumber)"
          :key="product.name"
          :class="productNumber > addShowingNumber && index >= addShowingNumber ? 'animate__animated animate__fadeIn' : ''"
      >
        <div class="img-product">
          <img :src="product.image" alt="product-img" />
        </div>
        <div class="bottom-information">
          <div class="left">
            <h4>{{ product.name }}</h4>
            <h5>{{ product.size }} {{ product.type === ProductType.COFFEE ? 'ml' : 'g' }}</h5>
          </div>
          <div class="right">
            <h4>$ {{ product.price.toFixed(2) }}</h4>
          </div>
        </div>
        <div
            v-if="modalStore.isProductInStore(product.id) !== -1"
            class="number-item"
        >
         <h3>{{ modalStore.findProductInStore(product.id).number }}</h3>
        </div>
        <div
            class="icon-add"
            v-on:click="addProduct(product)"
        >
          <Icon name="icon-park-outline:shopping-bag-one" />
        </div>
      </div>
    </div>
    <div class="more-action">
      <div
          v-if="productNumber < props.productList.length"
          class="more-btn"
          v-on:click="expandList"
      >
        <h4>More</h4>
      </div>
    </div>
  </div>
</template>
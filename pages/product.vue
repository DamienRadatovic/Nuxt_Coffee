<script setup lang="ts">
import {type Product, ProductType} from '@/types';
import LargeImage from "~/components/LargeImage.vue";

const route = useRoute();

const routeType = computed(() => route.query.type as ProductType);

const productList = ref<Product[]>([]);

const images = {
  [ProductType.COFFEE]: 'https://images.unsplash.com/photo-1530124175301-15984e162c84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  [ProductType.DESSERTS]: 'https://images.unsplash.com/photo-1505804750389-62ac45da38b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  [ProductType.SALADS]: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const fetchProducts = async () => {
  const { data } = await useFetch('/api/product/type', {
    query: { type: routeType }
  });

  productList.value = data.value;
};

await fetchProducts();

watch(
    () => routeType.value,
    async () => {
      await fetchProducts();
    },
);
</script>

<template>
  <div class="product-container">
    <div class="product-title">
      <h1>{{ routeType }}</h1>
    </div>
    <div class="product-list-container">
      <ProductList :product-list="productList" />
    </div>
    <PopularCategory />
    <LargeImage :img="images[routeType]" />
  </div>
</template>
<script setup lang="ts">
import type { Product } from '~/types';

const { data } = await useFetch('/api/product/popular');

const productList = computed(() => data.value as Product[]);
</script>

<template>
  <div class="popular-category">
    <div class="popular-title">
      <h2>The most popular products</h2>
    </div>
    <div class="popular-product">
      <ProductList :product-list="productList" />
    </div>
  </div>
</template>
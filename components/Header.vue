<script setup lang="ts">
import {ProductType} from "~/types";

const modalStore = useModalStore();
const { selectedProducts } = storeToRefs(modalStore);

const ticking = ref<boolean>(false);
const lastKnownScrollPosition = ref<number>(0);

const scrollListener = (): void => {
  lastKnownScrollPosition.value = window.scrollY;
  ticking.value = lastKnownScrollPosition.value > 0;
}

onMounted(() => {
  document.addEventListener( 'scroll', scrollListener);
  scrollListener();
})

onUnmounted(() => {
  document.removeEventListener('scroll', scrollListener);
})
</script>

<template>
  <header>
    <div class="header-container" :class="ticking ? 'shadow' : ''">
      <nav>
        <ul>
          <li><NuxtLink to="/">Main</NuxtLink></li>
          <li><NuxtLink :to="{ path: '/product', query: { type: ProductType.COFFEE } }">Coffee</NuxtLink></li>
          <li><NuxtLink :to="{ path: '/product', query: { type: ProductType.DESSERTS } }">Desserts</NuxtLink></li>
          <li><NuxtLink :to="{ path: '/product', query: { type: ProductType.SALADS } }">Salads</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
      <div
          class="icon-header"
          :class="selectedProducts.length > 0 ? 'notification' : ''"
          v-on:click="modalStore.changeModalState()"
      >
        <Icon name="icon-park-outline:shopping-bag-one" />
      </div>
    </div>
  </header>
</template>
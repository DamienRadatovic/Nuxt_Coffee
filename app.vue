<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModalStore } from "~/stores/modal.store";

const modalStore = useModalStore();
const { isOpenModal } = storeToRefs(modalStore);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <Modal v-if="isOpenModal" />
  </NuxtLayout>
</template>

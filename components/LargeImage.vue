<script setup lang="ts">

interface Props {
  img: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="coffee-shop-container">
    <div class="img-presentation">
      <img :src="props.img" alt="coffee shop">
    </div>
  </div>
</template>
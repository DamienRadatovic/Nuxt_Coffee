<script setup lang="ts">
import {ProductPayment, ProductType, PutDown} from '~/types';
import type { SelectProduct } from "~/stores/modal.store";

const orderOptionsPayment = [
  {
    text: 'At table',
    value: ProductPayment.AT_TABLE,
  },
  {
    text: 'Online',
    value: ProductPayment.ONLINE,
  },
  {
    text: 'At the counter',
    value: ProductPayment.AT_COUNTER,
  },
];
const orderPutDown = [
  {
    text: 'fork, knife',
    value: PutDown.FORK,
  },
  {
    text: 'salt, pepper',
    value: PutDown.SALT,
  },
  {
    text: 'napkins',
    value: PutDown.NAPKINS,
  },
];

const modalStore = useModalStore();
const { selectedProducts, customer, paymentOption, paymentPutDown } = storeToRefs(modalStore);

const removeNumberItem = (product: SelectProduct): void => {
  if (product.number === 1) {
    selectedProducts.value = selectedProducts.value.filter((selectedProduct: SelectProduct) => selectedProduct.product.id !== product.product.id);
  } else {
    product.number -= 1;
  }
};

const addNumberItem = (product: SelectProduct): void => {
  product.number += 1;
};

onMounted(() => {
  document.documentElement.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.documentElement.style.overflow = 'auto';
});
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <div class="title">
        <h3>Your order</h3>
      </div>
      <div class="modal-content">
        <div class="list-order">
          <div
              class="order-item"
              v-for="selectedProduct in selectedProducts"
              :key="selectedProduct.product.id"
          >
            <div class="left-order">
              <div class="order-img">
                <img :src="selectedProduct.product.image" alt="product image" />
              </div>
              <div class="order-description">
                <h3>{{ selectedProduct.product.name }}</h3>
                <h5>{{ selectedProduct.product.size }} {{ selectedProduct.product.type === ProductType.COFFEE ? 'ml' : 'g' }}</h5>
              </div>
            </div>
            <div class="right-order">
              <div class="order-change-number">
                <div
                    class="order-number-icon"
                    v-on:click="removeNumberItem(selectedProduct)"
                >
                  <Icon name="tabler:minus" />
                </div>
                <h4>{{ selectedProduct.number }}</h4>
                <div
                    class="order-number-icon"
                    v-on:click="addNumberItem(selectedProduct)"
                >
                  <Icon name="tabler:plus" />
                </div>
              </div>
              <h3 class="order-price">$ {{ (selectedProduct.product.price * selectedProduct.number).toFixed(2) }}</h3>
            </div>
          </div>
        </div>
        <div class="customer-information">
          <input type="text" placeholder="Your name" v-model="customer.name" />
          <input type="number" placeholder="Your table number" min="0" v-model="customer.tableNumber" />
        </div>
        <div class="payment-options">
          <h3>Delivery payment</h3>
          <template
              v-for="option in orderOptionsPayment"
              :key="option.value"
          >
            <div class="radio-style">
              <input :value="option.value" :id="option.value"  v-model="paymentOption" type="radio">
              <label :for="option.value" :class="paymentOption === option.value ? 'checked' : 'not-checked'">{{ option.text }}</label>
            </div>
          </template>
        </div>
        <div class="put-down">
          <h3>Put down</h3>
          <template
              v-for="option in orderPutDown"
              :key="option.value"
          >
            <div class="radio-style">
              <input :value="option.value" :id="option.value" v-model="paymentPutDown" type="checkbox" :checked="paymentPutDown.includes(option.value)">
              <label :for="option.value" :class="paymentPutDown.includes(option.value) ? 'checked' : 'not-checked'">{{ option.text }}</label>
            </div>
          </template>
        </div>
        <div class="total">
          <h3>Total</h3>
          <h3>${{ modalStore.totalOrder }}</h3>
        </div>
        <div class="send-btn">
          <button class="send-btn" v-on:click="modalStore.changeModalState()">CLOSE</button>
        </div>
      </div>
    </div>
  </div>
</template>
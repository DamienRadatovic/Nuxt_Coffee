<script setup lang="ts">
import LargeImage from "~/components/LargeImage.vue";
</script>

<template>
  <div class="index-container">
    <div class="index-welcome">
      <div class="welcome-left">
        <div class="left-top">
          <h1>Coffee Time</h1>
        </div>
        <div class="left-bottom">
          <div class="bottom-left">
            <div class="img-presentation">
              <img src="https://images.unsplash.com/photo-1558643973-ec5253dc0333?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coffee-presentation">
            </div>
          </div>
          <div class="bottom-right">
            <div class="bottom-right-top">
              <h3>Enjoy the rich flavor of this</h3>
              <h3>coffee to awaken your senses</h3>
            </div>
            <div class="bottom-right-bottom">
              <div class="img-presentation">
                <img src="https://images.unsplash.com/photo-1521161908453-1cacd0215437?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coffee-presentation-2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="welcome-right">
        <div class="right-top">
          <h2>Wake up and enjoy</h2>
          <h2>the aroma of coffee</h2>
        </div>
        <div class="right-bottom">
          <div class="img-presentation">
            <img src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coffee-presentation-3">
          </div>
        </div>
      </div>
    </div>
    <PopularCategory />
    <LargeImage img="https://amazingarchitecture.com/storage/3796/responsive-images/cafe___media_library_original_1344_756.jpg" />
  </div>
</template>
<template>
  <div class="relative col-span-4" :class="{ 'pointer-events-none opacity-50': loading }">
    <WishlistPageContent :products="wishlist?.products" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
  pageType: 'static',
});

const { fetchWishlist, data: wishlist, loading } = useWishlist();

fetchWishlist();
</script>

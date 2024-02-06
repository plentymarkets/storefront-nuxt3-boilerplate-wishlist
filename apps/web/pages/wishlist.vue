<template>
  <div>
    <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
      <div class="relative" :class="{ 'pointer-events-none opacity-50': loading }">
        <WishlistPageContent :title="t('wishlist')" :products="wishlist?.products" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const localePath = useLocalePath();
const { t } = useI18n();
const { fetchWishlist, data: wishlist, loading } = useWishlist();

fetchWishlist();

const breadcrumbs = computed(() => {
  return [
    { name: t('home'), link: localePath(paths.home) },
    { name: t('wishlist'), link: localePath(paths.wishlist) },
  ];
});
</script>

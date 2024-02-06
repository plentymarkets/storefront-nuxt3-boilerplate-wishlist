<template>
  <SfButton
    variant="tertiary"
    size="sm"
    :aria-label="isWishlistItem ? t('removeProductFromWishlist') : t('addProductToWishlist')"
    @click="triggerWishlist()"
    data-testid="wishlist-trigger"
  >
    <SfLoaderCircular v-if="wishlistLoading" class="flex justify-center items-center" size="sm" />
    <template v-else>
      <SfIconClose v-if="discard" size="sm" />
      <SfIconFavoriteFilled v-else-if="isWishlistItem" size="sm" />
      <SfIconFavorite v-else size="sm" />
      <slot name="content" :active="isWishlistItem" />
    </template>
  </SfButton>
</template>

<script setup lang="ts">
import { WishlistButtonProps } from '~/components/WishlistButton/types';
import { SfButton, SfIconFavorite, SfIconFavoriteFilled, SfLoaderCircular, SfIconClose } from '@storefront-ui/vue';

withDefaults(defineProps<WishlistButtonProps>(), {
  discard: false,
});

const isWishlistItem = ref(false);
const wishlistLoading = ref(false);

const { t } = useI18n();

const triggerWishlist = () => {
  wishlistLoading.value = true;
  isWishlistItem.value = !isWishlistItem.value;
  wishlistLoading.value = false;
};
</script>

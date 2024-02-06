<template>
  <NarrowContainer>
    <div class="mb-20 px-4 md:px-0" data-testid="wishlist-layout">
      <div v-if="products && products.length > 0" data-testid="wishlist-page-content">
        <div class="flex-1">
          <section
            class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
            data-testid="wishlist-grid"
          >
            <NuxtLazyHydrate
              when-visible
              v-for="({ id, name, rating, price, primaryImage, slug }, index) in products"
              :key="id"
            >
              <UiProductCard
                :name="name ?? ''"
                :rating-count="rating?.count"
                :rating="rating?.average"
                :price="price?.value.amount"
                :image-url="primaryImage?.url ?? ''"
                :image-alt="primaryImage?.alt ?? ''"
                :slug="slug"
                :priority="index === 0"
              >
                <template #wishlistButton>
                  <WishlistButton discard square class="absolute top-0 right-0 mr-2 mt-2 bg-white" />
                </template>
              </UiProductCard>
            </NuxtLazyHydrate>
          </section>
        </div>
      </div>
      <div v-else class="flex items-center justify-center flex-col pt-24 pb-32" data-testid="wishlist-page-content">
        <NuxtImg
          data-testid="empty-wishlist-image"
          src="/images/empty-cart.svg"
          :alt="$t('emptyCartImgAlt')"
          width="192"
          height="192"
        />
        <h2 data-testid="empty-wishlist-text" class="mt-8 typography-headline-3 font-bold">
          {{ $t('emptyWishlist') }}
        </h2>
      </div>

      <UiPagination
          v-if="true"
          :current-page="1"
          :total-items="24"
          :page-size="5"
          :max-visible-pages="2"
      />
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import { WishlistPageContentProps } from '~/components/WishlistPageContent/types';

defineProps<WishlistPageContentProps>();
</script>

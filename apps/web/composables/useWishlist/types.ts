import type { Ref } from 'vue';
import type { Maybe } from '@vue-storefront/unified-data-model';
import type { GetProducts } from '@vue-storefront/storefront-boilerplate-sdk';

export interface UseWishlistState {
  data: GetProducts | null;
  loading: boolean;
}

export type FetchWishlist = () => Promise<Ref<Maybe<GetProducts>>>;

export interface UseWishlist {
  data: Readonly<Ref<UseWishlistState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchWishlist: FetchWishlist;
}

export type UseWishlistReturn = () => UseWishlist;

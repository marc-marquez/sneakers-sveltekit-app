import { writable } from 'svelte/store';
import type { CartItemType } from '../types/CartItem';

const CartStore = writable<CartItemType[]>([]);

export default CartStore;

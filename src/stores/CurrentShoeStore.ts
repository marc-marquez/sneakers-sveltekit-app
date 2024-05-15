import { writable } from 'svelte/store';
import type { CurrentShoeType } from '../types/CurrentShoe';
import type { ShoeType } from '../types/Shoe';

const CurrentShoeStore = writable<CurrentShoeType>({
	currentShoe: <ShoeType>{},
	currentShoeIndex: 0,
	currentShoeVariant: -1
});

export default CurrentShoeStore;

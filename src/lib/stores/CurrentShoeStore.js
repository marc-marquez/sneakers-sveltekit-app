import { writable } from 'svelte/store';

const CurrentShoeStore = writable({
	currentShoe: {},
	currentShoeVariant: null,
	currentShoeIndex: 0
});

export default CurrentShoeStore;

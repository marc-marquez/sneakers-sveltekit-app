import { writable } from 'svelte/store';

const ToastStore = writable({
	queue: [],
});

export default ToastStore;

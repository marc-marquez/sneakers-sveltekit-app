<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FavoritesStore from '../stores/FavoritesStore';
	import ShoeCard from './ShoeCard.svelte';

	export let item;
	export let i: number = 0;

	const dispatch = createEventDispatcher();

	const removeFromList = (cartItem) => {
		let filtered = $FavoritesStore.filter((item, index) => {
			return index !== cartItem;
		});
		FavoritesStore.update((cart) => {
			return [...filtered];
		});
		dispatch('fireToast', {
			type: 'unfavorite',
			shoe: {
				title: item.title,
				size: item.size
			}
		});
	};
</script>

<div class="favorite-item">
	<ShoeCard shoe={item} />
</div>

<style>
	.favorite-item {
		display: flex;
		justify-content: space-between;
		margin: 10px 0;
	}

	.remove-button {
		border: none;
		background-color: transparent;
		font-size: 20px;
	}

	.remove-button:hover {
		cursor: pointer;
		color: red;
		background-color: transparent;
	}

	button {
		border: none;
		background-color: lightgrey;
		font-size: 20px;
		font-weight: 900;
		border-radius: 10px;
		padding: 5px 10px;
	}

	button:hover {
		cursor: pointer;
		background-color: #a6f0ff;
		color: white;
	}
</style>

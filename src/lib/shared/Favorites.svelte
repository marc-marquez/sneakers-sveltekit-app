<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FavoritesStore from '$lib/stores/FavoritesStore';
	import FavoriteItem from './FavoriteItem.svelte';

	const dispatch = createEventDispatcher();

	const emptyList = () => {
		FavoritesStore.update(() => {
			return [];
		});
	};

	const fireToast = (e) => {
		dispatch('fireToast', e.detail);
	};
</script>

<div class="favorites">
	<div class="favorites-list">
		{#each $FavoritesStore as item, i (`${item.id}_${item.size}_${i}`)}
			<FavoriteItem {item} {i} on:fireToast={fireToast} />
		{/each}
	</div>
	{#if $FavoritesStore.length}
		<button style="margin-top: 20px;" on:click={emptyList}>Empty List</button>
	{:else}
		<h1 style="text-align: center;">Your list is empty</h1>
	{/if}
</div>

<style>
	.favorites {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 20px;
	}

	.favorites-list {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	button {
		border: 1px solid black;
		background-color: black;
		padding: 5px 10px;
		font-size: 24px;
		color: white;
		border-radius: 50px;
	}

	button:hover {
		cursor: pointer;
		background-color: #a6f0ff;
		border: 1px solid #a6f0ff;
		color: black;
	}

	button:disabled {
		cursor: not-allowed;
		color: grey;
	}
</style>

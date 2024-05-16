<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import FavoriteButton from './FavoriteButton.svelte';
	import AddToCartButton from './AddToCartButton.svelte';
	import CurrentShoeStore from '$lib/stores/CurrentShoeStore';
	import UserStore from '$lib/stores/UserStore';

	export let shoe: any = {};
	export let currentShoeVariant: number | null = null;

	const dispatch = createEventDispatcher();

	const toggleError = (state: boolean) => {
		dispatch('toggleError', state);
	};

	const getShoeDetails = (e) => {
        CurrentShoeStore.update((store) => {
			return {
				...store,
				currentShoe: e,
			};
		});

		UserStore.update((store) => {
			return {
				...store,
				isDetailsDrawerOpen: true,
			};
		});
    }
</script>

<div class="shoe-actions">
	<button on:click={() => getShoeDetails(shoe)} disabled={$UserStore.isDetailsDrawerOpen}><i class="fa-solid fa-circle-info"></i></button>
	<FavoriteButton {shoe} />
	<AddToCartButton
		currentShoe={shoe}
		{currentShoeVariant}
		on:missingSize={() => toggleError(true)}
	/>
	{#if shoe?.variants?.[currentShoeVariant]?.price}
		<h1>${shoe.variants[currentShoeVariant]?.price}</h1>
	{/if}
</div>

<style>
	.shoe-actions {
		display: flex;
		justify-content: space-between;
		flex: 1;
		align-items: center;
	}

	button {
		border: none;
		background-color: white;
		font-size: 24px;
	}

	button:hover {
		cursor: pointer;
	}

	h1 {
		margin: 0;
		padding: 0;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import PageLayout from '$lib/shared/PageLayout.svelte';
	import ShoeCard from '$lib/shared/ShoeCard.svelte';
	import FavoritesStore from '$lib/stores/FavoritesStore'
	import EmptyState from '$lib/shared/EmptyState.svelte';
	import CurrentShoeStore from '$lib/stores/CurrentShoeStore'
	import UserStore from '$lib/stores/UserStore'

	export let data;

	const dispatch = createEventDispatcher();

	const getNextPage = () => {
		console.log('Getting next page');
	};

	const getPrevPage = () => {
		console.log('Getting previous page');
	};

	const getShoeDetails = (e) => {
		CurrentShoeStore.update((store) => {
			return {
				...store,
				currentShoe: e,
				currentShoeVariant: null,
			};
		});

		UserStore.update((store) => {
			return {
				...store,
				isDetailsDrawerOpen: true,
			};
		});
	};
</script>

<PageLayout>
	{#if $FavoritesStore.length === 0}
		<EmptyState message="No favorites added" />
	{:else}
		<div class="favorites-page">
			<div class="photo">
				<div class="faves wording">Your Faves</div>
			</div>
			<div class="favorites">
				{#each $FavoritesStore as favorite}
					<ShoeCard shoe={favorite} on:getShoeDetails={() => getShoeDetails(favorite)} orientation="vertical" customStyles="max-height: 250px;" />
				{/each}
			</div>
			<div class="suggestions-container">
				<h1>You may also like...</h1>
				<div class="suggestions">
					{#each data.hits as shoe}
						<ShoeCard {shoe} on:getShoeDetails={() => getShoeDetails(shoe)} orientation="horizontal" />
					{/each}
				</div>
			</div>
		</div>
	{/if}
</PageLayout>

<style>
	.favorites-page {
		display: grid;
		grid-template-columns: repeat(4, 1fr) minmax(0, 2fr);
		grid-auto-rows: minmax(100px, auto);
		grid-gap: 10px;
		width: 100%;
		margin: 0 auto;
		grid-template-areas:
			'photo photo photo photo photo photo'
			'photo photo photo photo photo photo'
			'photo photo photo photo photo photo'
			'favorites favorites favorites favorites suggestions suggestions';
	}

	.photo {
		background: url('$lib/assets/images/favorites.jpg') no-repeat center/cover;
		text-align: center;
		position: relative;
		border-radius: 25px;
		grid-area: photo;
	}

	.favorites {
		grid-area: favorites;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(auto, 300px);
		grid-gap: 1rem;
		margin-top: 50px;
	}

	.suggestions {
		grid-area: suggestions;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 10px;
		overflow-y: auto;
		max-height: 50svh;
		grid-auto-rows: minmax(150px, auto);
	}

	.suggestions::-webkit-scrollbar {
		display: none;
	}

	.wording {
		font-size: clamp(3rem, 8vw, 7rem);
		position: absolute;
	}

	.faves {
		top: 1rem;
		left: 2rem;
		color: white;
	}

	@media (max-width: 1024px) {
		.favorites-page {
			grid-template-columns: 1fr;
			grid-template-areas:
				'photo'
				'photo'
				'photo'
				'favorites'
				'suggestions';
		}

		.photo {
			border-radius: 0;
		}

		.suggestions-container {
			display: none;
		}

		.favorites {
			grid-template-columns: 1fr 1fr;
			margin: 10px;
		}
	}
</style>

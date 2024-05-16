<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import RowContainer from '../shared/RowContainer.svelte';
	import Drawer from '../shared/Drawer.svelte';
	import ShoeVariants from '../shared/ShoeVariants.svelte';
	import ShoeActions from '../shared/ShoeActions.svelte';

	import UserStore from '$lib/stores/UserStore';
	import CurrentShoeStore from '$lib/stores/CurrentShoeStore';
	import DISPLAY_FORMAT from '$lib/constants/DisplayFormat';

	export let shoe: any = {};
	export let currentShoeVariant: number | null = null;

	let showError = false;

	const dispatch = createEventDispatcher();

	const toggleDetailsDrawer = () => {
		UserStore.update((store) => {
			return {
				...store,
				isDetailsDrawerOpen: !store.isDetailsDrawerOpen,
			};
		});
	};

	const setVariant = (e) => {
		CurrentShoeStore.update((store) => {
			return {
				...store,
				currentShoeVariant: e.detail,
			};
		});
	};

	const fireToast = (e) => {
		dispatch('fireToast', e.detail);
	};

	const toggleError = (e) => {
		showError = e.detail;
	};
</script>

<Drawer on:closeDrawer={toggleDetailsDrawer} isDrawerOpen={$UserStore.isDetailsDrawerOpen}>
	<div class="container">
		<div class="image-container">
			<img src={shoe.image} alt={shoe.title} in:fly|global={{ y: -15, duration: 2000 }} />
		</div>
		<div class="details-container">
			<h1 style="margin-bottom: 10px">{shoe.title}</h1>

			{#if $UserStore.displayFormat !== DISPLAY_FORMAT.list}
				{#if shoe.description}
					<p class="description">{@html shoe.description}</p>
				{:else}
					<p class="description">No description available</p>
				{/if}
			{/if}

			{#if showError}
				<h1 style="color: red; text-align: center;">Select A Size</h1>
			{/if}

			<!-- {#if $UserStore.displayFormat !== DISPLAY_FORMAT.featured} -->
				{#if shoe?.variants}
					<RowContainer
						style="flex:1; flex-wrap: wrap; margin-bottom: 20px; justify-content: center; align-items: center;"
					>
						<ShoeVariants
							{shoe}
							{currentShoeVariant}
							on:setVariant={setVariant}
							on:toggleError={toggleError}
						/>
					</RowContainer>

					<RowContainer style="flex:1">
						<ShoeActions
							{shoe}
							{currentShoeVariant}
							on:fireToast={fireToast}
							on:toggleError={toggleError}
						/>
					</RowContainer>
				{/if}
			<!-- {/if} -->
		</div>
	</div>
</Drawer>

<style>
	.container {
		display: flex;
		flex-direction: row;
		padding: 20px;
		align-items: center;
	}

	.image-container {
		max-width: 300px;
	}

	img {
		object-fit: contain;
		width: 100%;
		aspect-ratio: 1;
	}

	.details-container {
		margin-left: 40px;
		flex-grow: 2;
	}

	.description {
		margin-top: 10px;
		margin-bottom: 20px;
		width: 100%;
	}

	@media (max-width: 1024px) {
		.container {
			flex-direction: column;
			max-height: 50%;
			padding: 15px;
		}

		.details-container {
			margin-left: 0;
			margin-top: 20px;
			text-align: center;
		}
	}
</style>

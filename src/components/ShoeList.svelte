<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ColumnContainer from '../shared/ColumnContainer.svelte';
	import RowContainer from '../shared/RowContainer.svelte';
	import CircleButton from '../shared/CircleButton.svelte';
	import CurrentShoeStore from '../stores/CurrentShoeStore';
	import UserStore from '../stores/UserStore';

	export let shoes: Array<any> = [];
	export let currentPage: number = 0;
	export let totalPages: number = 0;

	const dispatch = createEventDispatcher();

	$: lowIndex = currentPage === 1 ? 0 : currentPage * 10;
	$: highIndex = lowIndex + 20;
	$: currentShoeList = shoes?.slice(lowIndex, highIndex);

	const getPrevPage = () => {
		dispatch('getPrevPage');
	};

	const getNextPage = () => {
		dispatch('getNextPage');
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
    }
</script>

<RowContainer style="flex-wrap: nowrap; align-items: flex-start; justify-content: end;">
	<CircleButton handleClick={() => getPrevPage()} disabled={currentPage <= 1}>
		<i class="fas fa-chevron-left" />
	</CircleButton>
	<CircleButton handleClick={() => getNextPage()} disabled={currentPage >= totalPages - 1}>
		<i class="fas fa-chevron-right" />
	</CircleButton>
</RowContainer>
<ColumnContainer style="flex:1;">
	{#each currentShoeList as shoe (shoe.id)}
		<RowContainer
			style="padding: 10px; border-top: 5px solid #a6f0ff; flex-wrap: nowrap; width: 100%; justify-content: space-between; align-items: center;"
		>
			<h1 style="text-align: left; margin: 0">{shoe.title}</h1>
			{#if shoe.image}
				<button class="shoe-button" on:click={() => getShoeDetails(shoe)}>
					<div class="image-container">
						<img src={shoe.image} alt={shoe.name} />
					</div>
				</button>
			{/if}
		</RowContainer>
		<RowContainer style="padding: 10px; flex-wrap: nowrap; width: 100%;">
			{#if shoe.description}
				<p style="text-align: left; margin-bottom: 15px;">{@html shoe.description}</p>
			{:else}
				<p style="text-align: left; margin-bottom: 15px;">No description available</p>
			{/if}
		</RowContainer>
	{/each}
</ColumnContainer>
<RowContainer style="flex-wrap: nowrap; align-items: flex-start; justify-content: end;">
	<CircleButton handleClick={() => getPrevPage()} disabled={currentPage <= 1}>
		<i class="fas fa-chevron-left" />
	</CircleButton>
	<CircleButton handleClick={() => getNextPage()} disabled={currentPage >= totalPages - 1}>
		<i class="fas fa-chevron-right" />
	</CircleButton>
</RowContainer>

<style>
	.image-container {
		max-width: 150px;
	}

	img {
		object-fit: contain;
		width: 100%;
	}

	.shoe-button {
		background-color: transparent;
		border: none;
		margin-left: 10px;
	}

	.shoe-button:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	@media (max-width: 1024px) {
		.image-container {
			max-width: 100px;
		}
	}
</style>

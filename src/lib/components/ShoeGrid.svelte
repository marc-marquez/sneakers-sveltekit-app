<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import RowContainer from '../shared/RowContainer.svelte';
	import CircleButton from '../shared/CircleButton.svelte';
	import ShoeCard from '../shared/ShoeCard.svelte';

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
</script>

<div class="shoe-grid">
	<div class="grid">
		{#each currentShoeList as shoe, index (shoe.id)}
			{#if shoe.image}
				<ShoeCard {shoe} showBorder={false} />
			{/if}
		{/each}
	</div>
	<RowContainer style="flex-wrap: nowrap; align-items: flex-start; justify-content: center;">
		<CircleButton handleClick={() => getPrevPage()} disabled={currentPage <= 1}>
			<i class="fas fa-chevron-left" />
		</CircleButton>
		<CircleButton handleClick={() => getNextPage()} disabled={currentPage >= totalPages - 1}>
			<i class="fas fa-chevron-right" />
		</CircleButton>
	</RowContainer>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(5, minmax(150px, 1fr));
		grid-auto-rows: 250px;
		gap: 20px;
		place-items: center;
	}

	@media (max-width: 1280px) {
		.grid {
			grid-template-columns: repeat(4, minmax(150px, 1fr));
		}
	}

	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, minmax(150px, 1fr));
		}
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, minmax(150px, 1fr));
		}
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import RowContainer from '../shared/RowContainer.svelte';
	import CircleButton from '../shared/CircleButton.svelte';

	export let shoes: Array<any> = [];
	export let currentPage: number = 0;
	export let totalPages: number = 0;

	const dispatch = createEventDispatcher();

	$: lowIndex = currentPage === 1 ? 0 : currentPage * 10;
	$: highIndex = lowIndex + 20;
	$: currentShoeList = shoes?.slice(lowIndex, highIndex);

	const getLowestPrice = (shoe) => {
		return Math.min(...shoe.variants.map((variant) => variant.price));
	};

	const getPrevPage = () => {
		dispatch('getPrevPage');
	};

	const getNextPage = () => {
		dispatch('getNextPage');
	};

	const getShoeDetails = (id: string) => {
		dispatch('getShoeDetails', id);
	};
</script>

<div class="shoe-grid">
	<div class="grid">
		{#each currentShoeList as shoe, index (shoe.id)}
			{#if shoe.image}
				<div>
					<button on:click={() => getShoeDetails(shoe.id)}>
						<div class="image-container">
							<img src={shoe.image} alt={shoe.name} in:fly|global={{ y: -50, duration: 2000 }} />
						</div>
					</button>
					<div style="padding: .75rem;">
						<p style="font-size: .75rem;">{shoe.title}</p>
						<p style="font-size: .75rem; color: grey;">From ${getLowestPrice(shoe)}</p>
					</div>
				</div>
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
	img {
		object-fit: contain;
		width: 100%;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(150px, 1fr));
		gap: 20px;
		place-items: center;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	button:hover {
		transform: scale(1.1);
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, minmax(150px, 1fr));
		}
	}
</style>

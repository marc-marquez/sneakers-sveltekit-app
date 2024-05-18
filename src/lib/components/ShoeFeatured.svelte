<script lang="ts">
	import { fly } from 'svelte/transition';
	import ColumnContainer from '../shared/ColumnContainer.svelte';

	export let isLoading: boolean = false;
	export let currentShoe: any = {};
	export let currentBrand: string = '';
</script>

<div class="shoe-featured">
	{#if currentShoe && !isLoading}
		<ColumnContainer>
			<div class="shoe-container">
				{#if currentShoe.image && !currentShoe.image.includes('nft')}
					<div class="overlap display-1">{currentBrand}.</div>
					<div class="image-container">
						<img
							src={currentShoe.image}
							alt={currentShoe.title}
							loading="lazy"
							in:fly|global={{ y: -25, duration: 2000 }}
						/>
					</div>
				{:else}
					<div class="no-image-container">
						<h1>No image found</h1>
						<i class="fa-solid fa-image"></i>
					</div>
				{/if}
			</div>
		</ColumnContainer>
	{/if}
</div>

<style>
	.shoe-featured {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		flex: 1;
		flex-wrap: nowrap;
	}

	.shoe-container {
		max-width: 600px;
		text-align: center;
		position: relative;
	}

	img {
		object-fit: contain;
		width: 100%;
		aspect-ratio: 1;
		mix-blend-mode: multiply;
	}

	.no-image-container {
		font-size: 150px;
		color: grey;
		/* height: 30vh; */
		height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
	}

	.overlap {
		position: absolute;
		bottom: 4vh;
		right: -3vw;
		z-index: 50;
		color: rgba(0, 0, 0, 0.1);
		text-align: left;
		word-wrap: break-word;
		max-width: 500px;
		overflow-y: hidden;
	}

	@media (max-width: 1024px) {
		.image-container {
			max-width: 400px;
		}

		.display-1 {
			bottom: 2vh;
			right: 0;
		}

		.no-image-container {
			font-size: 100px;
			height: 400px;
		}
	}
</style>

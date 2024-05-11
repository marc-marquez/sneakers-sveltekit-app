<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';
	import ColumnContainer from '../shared/ColumnContainer.svelte';

	export let isLoading: boolean = false;
	export let currentShoe: any = {};
	export let currentBrand: string = '';

	// let imageLoading = true;
	// $: imgSrc = currentShoe.image;

	// const toggleImageLoading = () => {
	//     imageLoading = false;
	// }

	// let dispatch = createEventDispatcher();

	// onMount(() => {
	//     const img = new Image();
	//     img.onload = toggleImageLoading;
	//     img.src = imgSrc;
	// });
</script>

<div class="shoe-featured">
	{#if currentShoe && !isLoading}
		<ColumnContainer>
			<div style="max-width: 600px; text-align: center; position: relative;">
				{#if currentShoe.image && !currentShoe.image.includes('nft')}
					<div class="overlap display-1">{currentBrand}.</div>
					<div class="image-container">
						<img
							src={currentShoe.image}
							alt={currentShoe.title}
							in:fly|global={{ y: -25, duration: 2000 }}
						/>
					</div>
				{:else}
					<div class="no-image-container">
						<h1>No image found.</h1>
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

	img {
		object-fit: contain;
		width: 100%;
		height: 25vh;
	}

	.no-image-container {
		font-size: 150px;
		color: grey;
		height: 30vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
	}

	.overlap {
		position: absolute;
		bottom: -2vh;
		right: -3vw;
		z-index: 50;
		color: rgba(0, 0, 0, 0.1);
		text-align: left;
		word-wrap: break-word;
		max-width: 500px;
		overflow-y: hidden;
	}

	@media (max-width: 960px) {
		.image-container {
			max-width: 400px;
		}

		.display-1 {
			bottom: -1vh;
			right: 0;
		}
	}
</style>

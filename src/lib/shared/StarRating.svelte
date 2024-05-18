<script lang="ts">
	export let currentRating: number = 0;
	const handleClick = (rating: number) => {
		if (rating === currentRating) {
			currentRating = 0;
			return;
		}

		currentRating = rating;
	};
</script>

<div class="star-rating">
	{#each [1, 2, 3, 4, 5] as rating}
		<button
			class="star-button {rating <= currentRating ? 'selected' : 'unselected'}"
			on:click={() => handleClick(rating)}
		>
			<i class="fa-solid fa-star" />
		</button>
	{/each}
</div>

<style>
	.star-rating {
		display: flex;
		flex-direction: row;
		font-size: 24px;
		mix-blend-mode: multiply;
	}

	.star-button {
		color: black;
		border: none;
		background-color: white;
	}

	.star-button:hover {
		cursor: pointer;
	}

	.selected {
		color: gold;
	}

	.unselected {
		color: black;
	}
</style>

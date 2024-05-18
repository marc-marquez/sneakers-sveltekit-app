<script lang="ts">
	export let currentRating: number = 0;
	// const handleClick = (rating: number) => {
	// 	if (rating === currentRating) {
	// 		currentRating = 0;
	// 		return;
	// 	}

	// 	currentRating = rating;
	// };
</script>

<div class="star-rating-simple">
	<!-- {#each [1, 2, 3, 4, 5] as rating}
		<button
			class="star-button {rating <= currentRating ? 'selected' : 'unselected'}"
			on:click={() => handleClick(rating)}
		>
			<i class="fa-solid fa-star" />
		</button>
	{/each} -->
	<div class="oval">
		<i class="fa-solid fa-star selected" />
		<p>{currentRating.toFixed(1)}</p>
	</div>
</div>

<style>
	.star-rating-simple {
		display: flex;
		flex-direction: row;
		/* font-size: 16px; */
		mix-blend-mode: multiply;
	}

	.oval {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		min-width: 50px;
		height: 25px;
		background-color: white;
		border-radius: 20px;
		border: 1px solid lightgrey;
		padding: .25rem .5rem;
	}

	p {
		margin: 0 0 0 .75rem;
	}

	/* .star-button {
		color: black;
		border: none;
		background-color: white;
	}

	.star-button:hover {
		cursor: pointer;
	}*/

	.selected {
		color: gold;
	}

	/* .unselected {
		color: black;
	} */
</style>

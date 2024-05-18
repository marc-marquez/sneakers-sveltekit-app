<div class="loading-state">
	<h1>Loading</h1>
	<div class="icons">
		{#each { length: 5 } as i}
			<i class="fa-solid fa-droplet fa-beat"></i>
		{/each}
	</div>
</div>

<style>
	.loading-state {
		display: flex;
		flex-direction: column;
		height: 45vh;
		align-items: center;
		justify-content: center;
		background-color: transparent;
	}

	.icons {
		font-size: 24px;
	}
</style>

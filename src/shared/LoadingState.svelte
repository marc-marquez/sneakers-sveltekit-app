<div class="container">
	<h1>Loading</h1>
	<div style="font-size: 24px">
		{#each { length: 5 } as i}
			<i class="fa-solid fa-droplet fa-beat"></i>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 45vh;
		align-items: center;
		justify-content: center;
	}
</style>

<script lang="ts">
	export let title = 'Insert Title';
	let isCollapsed = true;
	const toggleCollapse = () => {
		isCollapsed = !isCollapsed;
	};
</script>

<div class="collapsible-card">
	<div class="card-header {isCollapsed ? 'closed' : 'open'}">
		<h2>{title}</h2>
		<button class="caret" on:click={toggleCollapse}
			><i class="fa-solid {isCollapsed ? 'fa-caret-down' : 'fa-caret-up'}"></i></button
		>
	</div>
	{#if !isCollapsed}
		<div class="card-body">
			<div class="box">
				{#if !isCollapsed}
					<slot />
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.collapsible-card {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 10px 0;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		padding: 10px 30px;
	}

	h2 {
		margin: 0;
	}

	.closed {
		border-radius: 10px;
	}

	.open {
		border-radius: 10px 10px 0 0;
		border-bottom: 5px solid #efefef;
	}

	.card-body {
		background-color: white;
		/* height: 100%; */
		padding: 10px 20px;
		border-radius: 0px 0px 10px 10px;
	}

	.caret {
		border: none;
		background-color: transparent;
	}
</style>

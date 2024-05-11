<script lang="ts">
	import Drawer from '../shared/Drawer.svelte';

	export let isMenuDrawerOpen: boolean = false;
	export let toggleMenuDrawer;
</script>

<Drawer location="left" isDrawerOpen={isMenuDrawerOpen} on:closeDrawer={toggleMenuDrawer}>
	<div class="container">
		<div class="menu">
			<a class="item" href="/"><button on:click={toggleMenuDrawer}>Home</button></a>
			<a class="item" href="/shop"><button on:click={toggleMenuDrawer}>Shop</button></a>
			<a class="item" href="/favorites"><button on:click={toggleMenuDrawer}>Favorites</button></a>
			<a class="item" href="/checkout"><button on:click={toggleMenuDrawer}>Checkout</button></a>
		</div>
	</div>
</Drawer>

<style>
	.menu {
		display: flex;
		flex-direction: column;
	}

	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 10px;
	}

	.item {
		margin-bottom: 5px;
		padding: 10px 0;
		color: black;
		width: 100%;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: 900;
	}

	button {
		border: none;
		background-color: transparent;
		color: black;
		font-weight: 900;
	}

	.item:hover {
		background-color: #a6f0ff;
		color: white;
		cursor: pointer;
	}
</style>

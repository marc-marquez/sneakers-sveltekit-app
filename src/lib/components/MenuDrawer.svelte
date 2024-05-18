<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	// import ROUTES from '$lib/constants/Routes';
	import Drawer from '../shared/Drawer.svelte';

	export let isMenuDrawerOpen: boolean = false;
	export let toggleMenuDrawer;

	const goToLink = (link:string) => {
		goto(link);
		toggleMenuDrawer();
	};

	const routes = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Shop',
			link: '/shop'
		},
		{
			name: 'Favorites',
			link: '/favorites'
		},
		{
			name: 'Checkout',
			link: '/checkout'
		}
	];
</script>

<Drawer location="left" isDrawerOpen={isMenuDrawerOpen} on:closeDrawer={toggleMenuDrawer}>
	<div class="container">
		{#each routes as route}
			<div class="item" class:active={$page.url.pathname === route.link} on:click={() => goToLink(route.link)}>{route.name}</div>
		{/each}
	</div>
</Drawer>

<style>
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
		padding-left: 10px;
	}

	.active {
		cursor: not-allowed;
		background-color: #a6f0ff;
		color: white;
	}


	.item:hover {
		background-color: lightgrey;
		color: white;
		cursor: pointer;
	}
</style>

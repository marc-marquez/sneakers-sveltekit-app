<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';

	import MenuDrawer from '$lib/components/MenuDrawer.svelte';
	import ShoeDrawer from '$lib/components/ShoeDrawer.svelte';
	import Toast from '$lib/shared/Toast.svelte';

	import CartStore from '$lib/stores/CartStore';
	import UserStore from '$lib/stores/UserStore';
	import CurrentShoeStore from '$lib/stores/CurrentShoeStore';
	import { loading } from '$lib/stores/LoadingStore';
	import LoadingState from '$lib/shared/LoadingState.svelte';

	import ROUTES from '$lib/constants/Routes';

	let name: string = 'The Drip';

	const toggleMenu = () => {
		UserStore.update((store) => {
			return {
				...store,
				isMenuOpen: !store.isMenuOpen
			};
		});
	};

	const toggleDetailsDrawer = () => {
		UserStore.update((store) => {
			return {
				...store,
				isDetailsDrawerOpen: !store.isDetailsDrawerOpen
			};
		});
	};

	const goToFavorites = () => {
		goto(ROUTES.favorites.path);
	};

	const goToCart = () => {
		goto(ROUTES.checkout.path);
	};

	const setVariant = (e) => {
		CurrentShoeStore.update((store) => {
			return {
				...store,
				currentShoeVariant: e.detail
			};
		});
	};

	const fireToast = (e) => {
		UserStore.update((store) => {
			return {
				...store,
				toast: e.detail
			};
		});
	};

	$: $loading = !!$navigating;
</script>

<nav>
	<div style="display: flex; flex-wrap: nowrap; align-items: baseline;">
		<button class="mobile-button" on:click={toggleMenu}><i class="fa-solid fa-bars"></i></button>
		<h1 class="title">{name}</h1>
		<div class="menu-items">
			{#each ['home', 'shop'] as item}
				<a class:active={$page.url.pathname === ROUTES[item].path} href={ROUTES[item].path}>{ROUTES[item].name}</a>
			{/each}
		</div>
	</div>
	<div style="display: flex; flex-wrap: nowrap;">
		<button on:click={goToFavorites}><i class="fa-solid fa-heart"></i></button>
		<button style="margin-right: 2rem;" on:click={goToCart}>
			<span class="fa-layers fa-fw">
				<i class="fa-solid fa-cart-shopping"></i>
				<span class="fa-layers-text" data-fa-transform="shrink-8 down-3"
					>{$CartStore.length || ''}</span
				>
			</span>
		</button>
	</div>
</nav>
<div class="layout-container">
	{#if $loading}
		<LoadingState />
	{:else}
		<slot />
	{/if}
</div>
{#if $UserStore.isMenuOpen}
	<MenuDrawer isMenuDrawerOpen={$UserStore.isMenuOpen} toggleMenuDrawer={toggleMenu} />
{/if}

{#if $UserStore.isDetailsDrawerOpen}
	<ShoeDrawer
		shoe={$CurrentShoeStore.currentShoe}
		currentShoeVariant={$CurrentShoeStore.currentShoeVariant}
		on:toggleDetailsDrawer={toggleDetailsDrawer}
		on:setVariant={setVariant}
		on:fireToast={fireToast}
	/>
{/if}

{#if $UserStore.toast.length > 0 && $UserStore?.toast[0]?.isShowing}
	<Toast type={$UserStore?.toast[0]?.type} />
{/if}

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 10px;
		/* background-color: #a6f0ff; */
		background-color: white;
		background-color: #efefef;
		/* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); */
		flex-wrap: nowrap;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 50;
	}

	.menu-items {
		display: flex;
		flex-wrap: nowrap;
		gap: 10px;
		align-items: end;
		margin-left: 20px;
	}

	.title {
		margin-left: 20px;
	}

	h1 {
		margin: 0;
	}

	a {
		text-decoration: none;
		color: black;
		font-size: 20px;
		font-weight: 900;
		align-items: center;
		justify-content: center;
		border-bottom: 5px solid transparent;
	}

	a:hover {
		cursor: pointer;
		/* border-bottom: 5px solid white; */
		border-bottom: 5px solid lightgrey;
	}

	.active {
		cursor: not-allowed;
		border-bottom: 5px solid #a6f0ff;
	}

	/* .unselected {
		cursor: not-allowed;
		border-bottom: 5px solid white;
	} */

	.mobile-button {
		display: none;
	}

	button {
		border: none;
		background-color: transparent;
		font-size: 24px;
		margin-left: 10px;
		padding: 0;
	}

	button:hover {
		cursor: pointer;
	}

	.layout-container {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center start;
		margin-top: 100px;
		padding: 0 20px 0 20px
	}

	@media (max-width: 1024px) {
		nav {
			/* padding: 20px 10px; */
		}

		.layout-container {
			margin-top: 70px;
			padding: 0;
		}

		.title {
			margin-left: 10px;
		}

		.menu-items {
			display: none;
		}

		.mobile-button {
			display: block;
		}
	}
</style>

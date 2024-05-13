<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CartStore from '../stores/CartStore';

	export let name: string = '';

	let showMenu = false;

	const dispatch = createEventDispatcher();

	const openCart = () => {
		dispatch('openCart');
	};

	const openFavorites = () => {
		dispatch('openFavorites');
	};

	const toggleMenu = () => {
		dispatch('openMenu');
	};
</script>

<nav>
	<div style="display: flex; flex-wrap: nowrap;">
		<button class="mobile-button" on:click={toggleMenu}><i class="fa-solid fa-bars"></i></button>
		<h1 class="title">{name}</h1>
		<div class="menu-items">
			<a href="/">Home</a>
			<a href="/shop">Shop</a>
			<a href="/favorites">Favorites</a>
			<a href="/checkout">Checkout</a>
		</div>
	</div>
	<div style="display: flex; flex-wrap: nowrap;">
		<button on:click={openFavorites}><i class="fa-solid fa-heart"></i></button>
		<button on:click={openCart}>
			<span class="fa-layers fa-fw">
				<i class="fa-solid fa-cart-shopping"></i>
				<span class="fa-layers-text" data-fa-transform="shrink-8 down-3"
					>{$CartStore.length || ''}</span
				>
			</span>
		</button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 10px;
		background-color: #a6f0ff;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
		flex-wrap: nowrap;
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
		border-bottom: 5px solid white;
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

	span {
		font-family: 'Ostrich Sans', sans-serif;
		font-size: 20px;
		font-weight: 900;
	}

	.mobile-button {
		display: none;
	}

	@media (max-width: 1024px) {
		nav {
			padding: 20px 10px;
		}

		.menu-items {
			display: none;
		}

		.mobile-button {
			display: block;
		}
	}
</style>

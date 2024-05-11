<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CartStore from '../stores/CartStore';
	import CartItem from './CartItem.svelte';

	const dispatch = createEventDispatcher();

	$: totalCost = $CartStore.reduce((total, current) => total + current.price, 0);

	const fireToast = (e) => {
		dispatch('fireToast', e.detail);
	};
</script>

<div class="cart-items">
	{#if $CartStore.length}
		<div class="cart">
			{#each $CartStore as item, i (`${item.id}_${item.size}_${i}`)}
				<CartItem {item} {i} on:fireToast={fireToast} />
			{/each}
		</div>
	{:else}
		<h1 style="text-align: center;">Your cart is empty</h1>
	{/if}
</div>

<style>
	.cart-items {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.cart {
		display: flex;
		flex-direction: column;
	}
</style>

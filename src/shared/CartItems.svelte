<script lang="ts">
	import CartStore from '../stores/CartStore';
	import CartItem from './CartItem.svelte';

	$: totalCost = $CartStore.reduce((total, current) => total + current.price, 0);
</script>

<div class="cart-items">
	{#if $CartStore.length}
		<div class="cart">
			{#each $CartStore as item, i (`${item.id}_${item.size}_${i}`)}
				<CartItem {item} {i} />
			{/each}
		</div>
	{:else}
		<h1>Your cart is empty</h1>
	{/if}
</div>

<style>
	.cart-items {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	h1 {
		text-align: center;
	}

	.cart {
		display: flex;
		flex-direction: column;
	}
</style>

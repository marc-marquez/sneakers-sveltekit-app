<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CartStore from '../stores/CartStore';

	export let item: any = <any>{};
	export let i: number = 0;

	const dispatch = createEventDispatcher();

	const removeFromCart = (cartItem) => {
		let filtered = $CartStore.filter((item, index) => {
			return index !== cartItem;
		});
		CartStore.update((cart) => {
			return [...filtered];
		});
		dispatch('fireToast', {
			type: 'remove',
			shoe: {
				title: item.title,
				size: item.size
			}
		});
	};
</script>

<div class="cart-item">
	<button class="remove-button" on:click={() => removeFromCart(i)}
		><i class="fa-solid fa-trash"></i></button
	>
	<div class="image-container">
		<img src={item.image} alt={item.title} />
	</div>
	<div class="details">
		<p style="margin-bottom: 0">{item.title}</p>
		<p>Size: {item.size}</p>
	</div>
	<div class="price">
		<p>${Number(item.price).toFixed(2)}</p>
	</div>
</div>

<style>
	.cart-item {
		display: flex;
		justify-content: space-between;
		margin: 10px 0;
		gap: 20px;
	}

	.image-container {
		max-width: 70px;
	}

	img {
		object-fit: contain;
		width: 100%;
	}

	.details {
		flex: 2;
		align-self: center;
	}

	.remove-button {
		border: none;
		background-color: transparent;
		font-size: 20px;
	}

	.remove-button:hover {
		cursor: pointer;
		color: red;
		background-color: transparent;
	}

	.price {
		align-self: center;
	}
</style>

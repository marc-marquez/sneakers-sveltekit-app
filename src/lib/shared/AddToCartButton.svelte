<script lang="ts">
	import CartStore from '$lib/stores/CartStore';
	import UserStore from '$lib/stores/UserStore';
	import { createEventDispatcher } from 'svelte';

	export let currentShoe: any = <any>{};
	export let currentShoeVariant: number | null = null;

	const dispatch = createEventDispatcher();

	const modifyCart = () => {
		if (!currentShoe) {
			console.error('No shoe selected');
			return;
		}

		if (currentShoeVariant === null) {
			dispatch('missingSize');
			return;
		}

		let order = {
			id: currentShoe.id,
			title: currentShoe.title,
			image: currentShoe.image,
			size: currentShoe.variants[currentShoeVariant].size,
			price: currentShoe.variants[currentShoeVariant].price
		};

		CartStore.update((cart) => {
			return [...cart, order];
		});
		
		UserStore.update((store) => {
			return {
				...store,
				toast: [...store?.toast, {
					type: 'add',
					shoe: {
						title: currentShoe.title,
						size: currentShoe.variants[currentShoeVariant].size
					},
					isShowing: true
				}]
			};
		});
	};
</script>

<button class="add-button" on:click={modifyCart}>Add to Cart</button>

<style>
	.add-button {
		border: 1px solid black;
		background-color: black;
		padding: 10px 20px;
		font-size: 24px;
		color: white;
		border-radius: 50px;
	}

	.add-button:hover {
		cursor: pointer;
		background-color: #a6f0ff;
		border: 1px solid #a6f0ff;
		color: black;
	}

	.add-button:disabled {
		cursor: not-allowed;
		color: grey;
	}
</style>

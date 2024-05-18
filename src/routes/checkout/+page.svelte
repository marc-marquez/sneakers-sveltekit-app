<script lang="ts">
	import PageLayout from '$lib/shared/PageLayout.svelte';
	import CartItems from '$lib/shared/CartItems.svelte';
	import CollapsibleCard from '$lib/shared/CollapsibleCard.svelte';
	import CartTotal from '$lib/shared/CartTotal.svelte';
	import CartActions from '$lib/shared/CartActions.svelte';

	let personFields = ['first', 'last', 'email'];
	let creditFields = ['number', 'month', 'year', 'cvv'];
	let shippingFields = ['street', 'city', 'state', 'zip', 'country'];
</script>

<div class="checkout">
	<div class="photo">
		<div class="wording">Checkout</div>
	</div>
	<div class="info">
		<h1 style="text-align: left;">The Details</h1>
		<CollapsibleCard title="Contact Info">
			<div class="fields">
				{#each personFields as field}
					<div class="field">
						<label for={field}>{field}</label>
						<input style="margin-left: 20px;" type="text" id={field} name={field} required />
					</div>
				{/each}
			</div>
		</CollapsibleCard>
		<CollapsibleCard title="Shipping Info">
			<div class="fields">
				{#each shippingFields as field}
					<div class="field">
						<label for={field}>{field}</label>
						<input style="margin-left: 20px;" type="text" id={field} name={field} required />
					</div>
				{/each}
			</div>
		</CollapsibleCard>
		<CollapsibleCard title="Payment Method">
			<div class="fields">
				{#each creditFields as field}
					<div class="field">
						<label for={field}>{field}</label>
						<input style="margin-left: 20px;" type="text" id={field} name={field} required />
					</div>
				{/each}
			</div>
		</CollapsibleCard>
	</div>
	<div class="cart">
		<CartItems />
		<div class="cart-end">
			<div class="cart-total">
				<CartTotal />
			</div>
			<div class="cart-actions">
				<CartActions />
			</div>
		</div>
	</div>
</div>

<style>
	.photo {
		background: url('$lib/assets/images/checkout.jpg') no-repeat center/cover;
		grid-area: photo;
		position: relative;
		border-radius: 25px;
		height: 30vh;
		margin-bottom: 10px;
	}

	.info {
		background-color: #fff;
		padding: 20px;
		grid-area: info;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		height: fit-content;
	}

	.cart {
		background-color: #fff;
		padding: 20px;
		grid-area: cart;
		display: flex;
		flex-direction: column;
		border-radius: 25px;
		justify-content: space-between;
		height: fit-content;
	}

	.cart-total {
		text-align: right;
	}

	.cart-actions {
		display: block;
	}

	.checkout {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 10px;
		width: 100%;
		margin: 0 auto;
		grid-template-areas:
			'photo photo'
			'photo photo'
			'info cart';
		width: 100%;
	}

	.wording {
		font-size: clamp(3rem, 8vw, 7rem);
		position: absolute;
		color: black;
		top: 1rem;
		left: 2rem;
	}

	h1 {
		margin: 0;
	}

	.field {
		display: grid;
		grid-template-columns: 1fr 6fr;
	}

	label,
	input {
		margin: 10px;
		font-size: 16px;
		font-weight: 900;
	}

	/* .mobile-cart-actions {
		display: none;
	} */



	@media (max-width: 1024px) {
		.checkout {
			grid-template-columns: 1fr;
			grid-template-areas: 
			'photo'
			'info'
			'cart';
		}

		.photo {
			/* grid-column: 1/5;
			grid-row: 1/3; */
			border-radius: 0;
			margin-bottom: 0;
		}

		.info {
			border-radius: 0;
			/* grid-column: 1/5;
			grid-row: 3/4; */
			
		}

		.cart {
			/* grid-column: 1/5;
			grid-row: 4/7; */
			border-radius: 0;
		}
	}
</style>

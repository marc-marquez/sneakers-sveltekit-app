<script lang="ts">
	import PageLayout from '../../shared/PageLayout.svelte';
	import CartItems from '../../shared/CartItems.svelte';
	import CollapsibleCard from '../../shared/CollapsibleCard.svelte';
	import CartTotal from '../../shared/CartTotal.svelte';
	import CartActions from '../../shared/CartActions.svelte';

	let personFields = ['first', 'last', 'email'];
	let creditFields = ['number', 'month', 'year', 'cvv'];
	let shippingFields = ['street', 'city', 'state', 'zip', 'country'];
</script>

<PageLayout>
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
			<div style="text-align: right;">
				<CartTotal />
			</div>
			<div class="desktop-cart-actions">
				<CartActions />
			</div>
		</div>
		<div class="mobile-cart-actions">
			<CartActions />
		</div>
	</div></PageLayout
>

<style>
	.photo {
		background: url('../../assets/images/checkout.jpg') no-repeat center/cover;
		grid-area: photo;
		position: relative;
		border-radius: 25px;
		max-height: 70vh;
	}

	.info {
		background-color: #efefef;
		padding: 20px;
		grid-area: info;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
	}

	.cart {
		background-color: #fff;
		padding: 20px;
		grid-area: cart;
		display: flex;
		flex-direction: column;
	}

	.checkout {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 10px;
		width: 100%;
		margin: 0 auto;
		grid-template-areas:
			'photo photo photo photo'
			'photo photo photo photo'
			'info info cart cart';
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

	.mobile-cart-actions {
		display: none;
	}

	.desktop-cart-actions {
		display: block;
	}

	

	@media (max-width: 1024px) {
		.checkout {
			grid-template-columns: 1fr;
			grid-template-areas: 
			'photo'
			'info'
			'cart';
		}

		.photo {
			grid-column: 1/5;
			grid-row: 1/3;
			border-radius: 0;
		}

		.info {
			border-radius: 0;
			grid-column: 1/5;
			grid-row: 3/4;
			
		}

		.cart {
			grid-column: 1/5;
			grid-row: 4/7;
		}
	}
</style>

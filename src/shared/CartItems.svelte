<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import CartStore from "../stores/CartStore";
	import CartActions from "./CartActions.svelte";
	import CartItem from "./CartItem.svelte";

    const dispatch = createEventDispatcher();

    $: totalCost = $CartStore.reduce((total, current) => total + current.price, 0);

    const fireToast = (e) => {
        dispatch('fireToast', e.detail);
    }
</script>

<div class="cart-items">
    <h2 style="margin-top: 0; text-decoration: underline;">Your Cart</h2>
    {#if $CartStore.length}
        <div class="cart">
            {#each $CartStore as item, i (`${item.id}_${item.size}_${i}`)}
                <CartItem {item} {i} on:fireToast={fireToast} />
            {/each}
        </div>
    {:else}
        <h1>Your cart is empty</h1>
    {/if}
    {#if $CartStore.length}
    <div style="text-align: right;">
        <p>Total Cost: ${totalCost}</p>
        <CartActions />
    </div>
    {/if}
</div>

<style>
    .cart-items {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
    }

    .cart {
        display: flex;
        flex-direction: column;
    }
</style>
<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import FavoriteButton from "./FavoriteButton.svelte";
    import AddToCart from "./AddToCart.svelte";

    export let shoe: any = {};
    export let currentShoeVariant: number|null = null;

    const dispatch = createEventDispatcher();

    const toggleDetailsDrawer = () => {
        dispatch('toggleDetailsDrawer');
    }

    const fireSuccessToast = () => {
        dispatch('fireSuccessToast');
    }

    const fireFavoriteToast = () => {
        dispatch('fireFavoriteToast');
    }
</script>

<div class="shoe-actions">
    <button on:click={() => toggleDetailsDrawer()}><i class="fa-solid fa-circle-info"></i></button>
    <FavoriteButton {shoe} on:fireFavoriteToast={fireFavoriteToast} />
    <AddToCart currentShoe={shoe} {currentShoeVariant} on:addToCart={fireSuccessToast} />
    {#if shoe?.variants?.[currentShoeVariant]?.price}
        <h2>${shoe.variants[currentShoeVariant]?.price}</h2>
    {:else}
        <h2>SELECT SIZE</h2>
    {/if}
</div>

<style>
    .shoe-actions {
        display: flex;
        justify-content: space-around;
        flex: 1;
        align-items: center;
    }

    button {
        border: none;
        background-color: white;
        font-size: 24px;
    }

    button:hover {
        cursor: pointer;
    }

    h2 {
        margin: 0;
        padding: 0;
    }
</style>
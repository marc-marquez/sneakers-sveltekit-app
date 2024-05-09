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

    const toggleError = (state: boolean) => {
        dispatch('toggleError', state);
    }
</script>

<div class="shoe-actions">
    <button on:click={() => toggleDetailsDrawer()}><i class="fa-solid fa-circle-info"></i></button>
    <FavoriteButton {shoe} on:fireFavoriteToast={fireFavoriteToast} />
    <AddToCart currentShoe={shoe} {currentShoeVariant} on:addToCart={fireSuccessToast} on:missingSize={() => toggleError(true)} />
    {#if shoe?.variants?.[currentShoeVariant]?.price}
        <h2>${shoe.variants[currentShoeVariant]?.price}</h2>
    {/if}
</div>

<style>
    .shoe-actions {
        display: flex;
        justify-content: space-between;
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
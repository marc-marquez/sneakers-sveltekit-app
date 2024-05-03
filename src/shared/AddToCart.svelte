<script lang="ts">
    import CartStore from "../stores/CartStore";
    import { createEventDispatcher } from "svelte";

    export let currentShoe: any = <any>{};
    export let currentShoeVariant: number = null;

    const dispatch = createEventDispatcher();

    const modifyCart = () => {
        if (!currentShoe || currentShoeVariant === null) {
            console.error('No shoe or variant chosen.');
            return;
        }

        let order = {
            id: currentShoe.id,
            title: currentShoe.title,
            image: currentShoe.image,
            size: currentShoe.variants[currentShoeVariant].size,
            price: currentShoe.variants[currentShoeVariant].price
        }

        CartStore.update((cart) => {
            return [...cart, order];
        });

        dispatch('addToCart');
    }
</script>

<button class="add-button" on:click={modifyCart} disabled={currentShoeVariant === null}>
    <i class="fa-solid fa-cart-plus" />
</button>

<style>
    .add-button {
        border: none;
        background-color: white;
        font-size: 24px;
        color: black;
    }

    .add-button:hover {
        cursor: pointer;
        color: #a6f0ff;
    }

    .add-button:disabled {
        cursor: not-allowed;
        color: grey;
    }
</style>
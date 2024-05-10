<script lang="ts">
    import CartStore from "../stores/CartStore";

    export let showEmptyCart = false;

    const emptyCart = () => {
        CartStore.update(() => {
            return [];
        })
    };

    const pay = () => {
        console.log('Pay');
    }
</script>

<div class="cart-actions">
    {#if showEmptyCart}
    <button on:click={emptyCart}>Empty Cart</button>
    {/if}
    <button on:click={pay}>Pay</button>
</div>

<style>
    .cart-actions {
        margin-top: 20px;
    }

    button {
        border: 1px solid black;
        background-color: black;
        padding: 10px 20px;
        font-size: 24px;
        color: white;
        border-radius: 50px;
        width: 100%;
        margin-bottom: 10px;
    }

    button:hover {
        cursor: pointer;
        background-color: #a6f0ff;
        border: 1px solid #a6f0ff;
        color: black;
    }

    button:disabled {
        cursor: not-allowed;
        color: grey;
    }
</style>
<script lang="ts">
    import CartStore from "../stores/CartStore";

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
    <button on:click={emptyCart}>Empty Cart</button>
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
        font-size: 20px;
        color: white;
        border-radius: 50px;
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
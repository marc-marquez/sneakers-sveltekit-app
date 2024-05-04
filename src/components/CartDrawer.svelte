<script lang="ts">
    import Drawer from "../shared/Drawer.svelte";
    import CartStore from "../stores/CartStore";

    export let isCartOpen: boolean = false;
    export let toggleCart;

    $: totalCost = $CartStore.reduce((total, current) => total + current.price, 0);

    const emptyCart = () => {
        CartStore.update(() => {
            return [];
        })
    };

    const removeFromCart = (cartItem) => {
        let filtered = $CartStore.filter((item, index) => {
            return index !== cartItem;
        });
        CartStore.update((cart) => {
            return [...filtered];
        });
    }

    const pay = () => {
        console.log('Pay');
    }
</script>

<Drawer location="right" isDrawerOpen={isCartOpen} on:closeDrawer={toggleCart}>
    <div class="container">
        <h2 style="margin-top: 0; text-decoration: underline;">Your Cart</h2>
        <div class="cart">
            {#each $CartStore as item, i (`${item.id}_${item.size}_${i}`)}
            <div class="item">
                <button class="remove-button" on:click={() => removeFromCart(i)}><i class="fa-solid fa-trash"></i></button>
                <div style="max-width: 70px; margin-left: 20px">
                    <img style="object: contain; width: 100%;" src={item.image} alt={item.title} />
                </div>
                <div style="margin-left: 20px; justify-content: start; flex: 2; align-self: center;">
                    <p style="margin-bottom: 0">{item.title}</p>
                    <p>Size: {item.size}</p>
                </div>
                <div style="margin-left: 20px; align-self: center;">
                    <p>${item.price}</p>
                </div>
            </div>
            {/each}
        </div>
        {#if $CartStore.length}
        <div style="text-align: right;">
            <p>Total Cost: ${totalCost}</p>
            <div>
                <button on:click={emptyCart}>Empty Cart</button>
                <button on:click={pay}>Pay</button>
            </div>
        </div>
        {/if}
    </div>
</Drawer>

<style>
    .cart {
        display: flex;
        flex-direction: column;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
    }

    .item {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
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

    button {
        border: none;
        background-color: lightgrey;
        font-size: 20px;
        font-weight: 900;
        border-radius: 10px;
        padding: 5px 10px;
    }

    button:hover {
        cursor: pointer;
        background-color: #a6f0ff;
        color: white;
    }
</style>
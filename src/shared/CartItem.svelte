<script lang="ts">
    import CartStore from "../stores/CartStore";

    export let item: any = <any>{};
    export let i: number = 0;

    const removeFromCart = (cartItem) => {
        let filtered = $CartStore.filter((item, index) => {
            return index !== cartItem;
        });
        CartStore.update((cart) => {
            return [...filtered];
        });
    }
</script>

<div class="cart-item">
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

<style>
    .cart-item {
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
</style>
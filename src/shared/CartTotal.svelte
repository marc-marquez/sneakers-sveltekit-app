<script lang="ts">
    import CartStore from "../stores/CartStore";

    $: subtotal = $CartStore.reduce((total, current) => total + current?.price, 0).toFixed(2);
    $: tax = (Number(subtotal) * .0825).toFixed(2);
    $: total = Number(subtotal) + Number(tax);
</script>

<div class="cart-total">
    <p>Subtotal: {subtotal}</p>
    <p>Tax: {tax}</p>
    <p>Total: {total}</p>
</div>

<style>

</style>
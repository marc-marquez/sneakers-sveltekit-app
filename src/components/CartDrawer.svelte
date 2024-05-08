<script lang="ts">
    import Drawer from "../shared/Drawer.svelte";
    import CartItems from "../shared/CartItems.svelte";

    export let isCartOpen: boolean = false;
    export let toggleCart;
</script>

<Drawer location="right" isDrawerOpen={isCartOpen} on:closeDrawer={toggleCart}>
    <CartItems />
</Drawer>
<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Drawer from "../shared/Drawer.svelte";
    import CartItems from "../shared/CartItems.svelte";

    export let isCartOpen: boolean = false;
    export let toggleCart;

    const dispatch = createEventDispatcher();

    const fireToast = (e) => {
        dispatch('fireToast', e.detail);
    }
</script>

<Drawer location="right" isDrawerOpen={isCartOpen} on:closeDrawer={toggleCart}>
    <CartItems on:fireToast={fireToast} />
</Drawer>
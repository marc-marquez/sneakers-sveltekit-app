<script lang="ts">
    import Drawer from "../shared/Drawer.svelte";

    export let isMenuDrawerOpen: boolean = false;
    export let toggleMenuDrawer;
</script>

<Drawer location="left" isDrawerOpen={isMenuDrawerOpen} on:closeDrawer={toggleMenuDrawer}>
    <div class="container">
        <div class="menu">
            <div class="item">
                <a href="/">Home</a>
            </div>
            <div class="item">
                <a href="/shop">Shop</a>
            </div>
            <div class="item">
                <a href="/checkout">Checkout</a>
            </div>
        </div>
    </div>
</Drawer>

<style>
    .menu {
        display: flex;
        flex-direction: column;
    }

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
    }

    .item {
        margin-bottom: 5px;
        padding: 10px 0;
        color: black;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }

    .item:hover {
        background-color: #a6f0ff;
    }

    a {
        text-decoration: none;
        font-size: 20px;
    }
</style>
<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import DISPLAY_FORMAT from "../constants/DisplayFormat.js";
    import CartStore from "../stores/CartStore";
    import FavoritesStore from "../stores/FavoritesStore";

    export let name: string = '';

    export let displayFormat: string = DISPLAY_FORMAT.featured;

    let showMenu = false;

    const dispatch = createEventDispatcher();

    const handleDisplayFormatChange = (event) => {
        dispatch("displayFormatChange", event.target.value);
    }

    const openCart = () => {
        dispatch("openCart");
    }

    const openFavorites = () => {
        dispatch("openFavorites");
    }

    const toggleMenu = () => {
        dispatch("openMenu");
    }

</script>


<nav>
    <div style="display: flex; flex-wrap: nowrap;">
        <button class="mobile-button" on:click={toggleMenu}><i class="fa-solid fa-bars"></i></button>
        <h1 class="title">{name}</h1>
        <div class="menu-items">
            <a href="/">Shop</a>
            <a href="/checkout">Checkout</a>
        </div>
    </div>
    <div style="display: flex; flex-wrap: nowrap;">
        <div>
            <span class="view-label">View: </span>
            <select class="display-select" bind:value={displayFormat} on:change={handleDisplayFormatChange}>
                <option value={DISPLAY_FORMAT.featured}>Spotlight</option>
                <option value={DISPLAY_FORMAT.grid}>Window Shopping</option>
                <option value={DISPLAY_FORMAT.list}>Deep Dive</option>
            </select>
        </div>
        <button on:click={openFavorites} disabled={!$FavoritesStore.length}><i class="fa-solid fa-heart"></i></button>
        <button on:click={openCart} disabled={!$CartStore.length}><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
</nav>


<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 50px;
        background-color: #a6f0ff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        flex-wrap: nowrap;
    }

    .menu-items {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        align-items: end;
        margin-left: 20px;
    }

    .title {
        margin-left: 20px;
    }

    h1 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: 900;
        align-items: center;
        justify-content: center;
        border-bottom: 5px solid transparent;
    }

    a:hover {
        cursor: pointer;
        border-bottom: 5px solid white;
    }

    button {
        border: none;
        background-color: transparent;
        font-size: 24px;
        margin-left: 10px;
        padding: 0;
    }

    button:hover {
        cursor: pointer;
    }

    span {
        font-family: 'Ostrich Sans', sans-serif;
        font-size: 20px;
        font-weight: 900;
    }

    .display-select {
        border: none;
        background: white;
        padding: 10px;
        font-size: 20px;
        font-weight: 900;
        border-radius: 50px;
        text-align: center;
    }

    .mobile-button {
        display: none;
    }

    @media (max-width: 960px) {
        nav {
            padding: 30px 10px;
        }

        .view-label {
            display: none;
        }

        .display-select {
            padding: 3px 10px;
        }

        .menu-items {
            display: none;
        }

        .mobile-button {
            display: block;
        }
    }
</style>
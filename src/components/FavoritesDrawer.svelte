<script lang="ts">
    import Drawer from "../shared/Drawer.svelte";
    import FavoritesStore from "../stores/FavoritesStore.js";

    export let isFavoritesOpen: boolean = false;
    export let toggleFavorites;

    const emptyCart = () => {
        FavoritesStore.update(() => {
            return [];
        })
    };

    const removeFromCart = (cartItem) => {
        let filtered = $FavoritesStore.filter((item, index) => {
            return index !== cartItem;
        });
        FavoritesStore.update((cart) => {
            return [...filtered];
        });
    }
</script>

<Drawer location="right" isDrawerOpen={isFavoritesOpen} on:closeDrawer={toggleFavorites}>
    <div class="container">
        <h2 style="margin-top: 0; text-decoration: underline;">Your Faves</h2>
        <div class="favorites">
            {#each $FavoritesStore as item, i (`${item.id}_${item.size}_${i}`)}
            <div class="item">
                <button class="remove-button" on:click={() => removeFromCart(i)}><i class="fa-solid fa-trash"></i></button>
                <div style="max-width: 70px; margin-left: 20px">
                    <img style="object: contain; width: 100%;" src={item.image} alt={item.title} />
                </div>
                <div style="margin-left: 20px; justify-content: start; flex: 2; align-self: center;">
                    <p style="margin-bottom: 0">{item.title}</p>
                </div>
            </div>
            {/each}
        </div>
    </div>
</Drawer>

<style>
    .favorites {
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
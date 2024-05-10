<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import FavoritesStore from "../stores/FavoritesStore";
    
    export let item;
    export let i: number = 0;

    const dispatch = createEventDispatcher();

    const removeFromList = (cartItem) => {
        let filtered = $FavoritesStore.filter((item, index) => {
            return index !== cartItem;
        });
        FavoritesStore.update((cart) => {
            return [...filtered];
        });
        dispatch('fireToast', {
            type: 'unfavorite',
            shoe: {
                title: item.title,
                size: item.size
            }
        });
    }
</script>

<div class="favorite-item">
    <button class="remove-button" on:click={() => removeFromList(i)}><i class="fa-solid fa-trash"></i></button>
    <div style="max-width: 70px; margin-left: 20px">
        <img style="object: contain; width: 100%;" src={item.image} alt={item.title} />
    </div>
    <div style="margin-left: 20px; justify-content: start; flex: 2; align-self: center;">
        <p style="margin-bottom: 0">{item.title}</p>
    </div>
</div>

<style>
    .favorite-item {
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
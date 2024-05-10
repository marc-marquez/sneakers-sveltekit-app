<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import FavoritesStore from "../stores/FavoritesStore";
    import FavoriteItem from "./FavoriteItem.svelte";

    const dispatch = createEventDispatcher();
    
    const emptyList = () => {
        FavoritesStore.update(() => {
            return [];
        })
    };

    const fireToast = (e) => {
        dispatch('fireToast', e.detail);
    }
</script>

<div class="favorites">
    <div class="favorites-list">
        {#each $FavoritesStore as item, i (`${item.id}_${item.size}_${i}`)}
            <FavoriteItem {item} {i} on:fireToast={fireToast} />
        {/each}
    </div>
    {#if $FavoritesStore.length}
        <button on:click={emptyList}>Empty List</button>
    {:else}
        <h1>Your list is empty</h1>
    {/if}
</div>

<style>
    .favorites {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
    }

    .favorites-list {
        display: flex;
        flex-direction: column;
    }
</style>
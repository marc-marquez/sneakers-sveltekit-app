<script lang="ts">
    import FavoritesStore from "../stores/FavoritesStore";
    import FavoriteItem from "./FavoriteItem.svelte";

    const emptyList = () => {
        FavoritesStore.update(() => {
            return [];
        })
    };

    
</script>

<div class="favorites">
    <h2 style="margin-top: 0; text-decoration: underline;">Your Faves</h2>
    <div class="favorites-list">
        {#each $FavoritesStore as item, i (`${item.id}_${item.size}_${i}`)}
            <FavoriteItem {item} />
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
<script lang="ts">
    import Drawer from "../shared/Drawer.svelte";
	import Favorites from "../shared/Favorites.svelte";
    import FavoritesStore from "../stores/FavoritesStore.js";

    export let isFavoritesOpen: boolean = false;
    export let toggleFavorites;
</script>

<Drawer location="right" isDrawerOpen={isFavoritesOpen} on:closeDrawer={toggleFavorites}>
    <Favorites />
</Drawer>
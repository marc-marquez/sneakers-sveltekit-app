<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Drawer from "../shared/Drawer.svelte";
	import Favorites from "../shared/Favorites.svelte";

    const dispatch = createEventDispatcher();

    export let isFavoritesOpen: boolean = false;
    export let toggleFavorites;

    const fireToast = (e) => {
        dispatch('fireToast', e.detail);
    }
</script>

<Drawer location="right" isDrawerOpen={isFavoritesOpen} on:closeDrawer={toggleFavorites}>
    <Favorites on:fireToast={fireToast} />
</Drawer>
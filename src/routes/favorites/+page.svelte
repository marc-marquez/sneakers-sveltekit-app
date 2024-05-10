<script lang="ts">
    import { createEventDispatcher } from "svelte";
	import Favorites from "../../shared/Favorites.svelte";

    const dispatch = createEventDispatcher();

    const fireToast = (e) => {
        dispatch('fireToast', e.detail);
    }
</script>

<div class="favorites-page">
    <Favorites on:fireToast={fireToast} />
</div>

<style>

</style>
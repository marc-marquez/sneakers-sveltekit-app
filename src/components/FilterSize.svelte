<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let currentShoeSize: string = "";
    let sizes = [];

    for (let i = 4; i <= 14; i += 0.5) {
        sizes.push(i);
    }

    const sizeChange = (e) => {
        dispatch('sizeChange', e.target.value);
    }
</script>

<div class="filter-size">
    <h2 style="text-align: center;">Select Size</h2>
    <select bind:value={currentShoeSize} on:change={sizeChange}>
        <option value="">Any</option>
        {#each sizes as size}
            <option value={size.toString()}>{size}</option>
        {/each}
    </select>
</div>

<style>
    .filter-size {
        margin: 0 5px 20px;
        flex: 1;
    }

    h2 {
        margin-bottom: 10px;
    }

    select {
        font-size: 20px;
        background-color: #a6f0ff;
        border: 2px solid #a6f0ff;
        font-weight: bold;
        padding: 10px;
        border-radius: 50px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        width: 100%;
        text-align: center;
    }
</style>
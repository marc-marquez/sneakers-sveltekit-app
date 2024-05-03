<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let shoe: any = {};

    const dispatch = createEventDispatcher();

    export let currentShoeVariant = null;

    const setVariant = (index: number) => {
        let variant = currentShoeVariant === index ? null : index;
        dispatch("setVariant", variant);
    };
</script>

<div class="variants">
    {#each shoe.variants as variant, i (i)}
        <button class="variant-button {i === currentShoeVariant ? 'selected' : ''}" value={i} on:click={() => setVariant(i)}>{variant.size}</button>
    {/each}
</div>

<style>
    .variants {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .variant-button {
		background-color: black;
		width: 40px;
		height: 40px;
		margin: 2px;
		border-radius: 50%;
		border: 2px solid black;
		color: white;
        display: flex;
        justify-content: center;
        align-items: center;
	}

	.variant-button:hover {
		cursor: pointer;
		background-color: lightgrey;
		border: 2px solid lightgrey;
		color: black;
	}

	.variant-button.selected {
		background-color: #a6f0ff;
		border: 2px solid #a6f0ff;
		color: black
	}
</style>
<script lang="ts">
	import { fly } from 'svelte/transition';
    import { createEventDispatcher, onMount } from 'svelte';
    import ColumnContainer from '../shared/ColumnContainer.svelte';

    export let isLoading: boolean = false;
    export let currentShoe: any = {};
    export let currentBrand: string = '';

    let dispatch = createEventDispatcher();
</script>

<div class="container">
    {#if currentShoe && !isLoading}
    <ColumnContainer>
        <div style="max-width: 600px; text-align: center; position: relative;">
            {#if currentShoe.image && !currentShoe.image.includes('nft')}
                <div class="overlap display-1">{currentBrand}.</div>
                <img src={currentShoe.image} alt={currentShoe.title} in:fly={{ y: -25, duration: 2000 }} />
            {:else}
                <div style="font-size: 150px; color: grey; height: 30vh; display: flex; flex-direction: column; justify-content: center;align-self: center;">
                    <h1>No image found.</h1>
                    <i class="fa-solid fa-image"></i>
                </div>
            {/if}
        </div>
    </ColumnContainer>
    {/if}
</div>

<style>
    .container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        flex: 1;
        flex-wrap: nowrap;
    }

    img {
        object-fit: contain;
        width: 100%;
        height: 30vh;
    }

    .overlap {
		position: absolute;
		bottom: -1vh;
		left: -2vw;
		z-index: 100;
		color: rgba(0, 0, 0, 0.1);
        text-align: left;
        word-wrap: break-word;
        max-width: 500px;
        overflow-y: hidden
	}

    @media (max-width:  720px) {
        img {
            height: 20vh;
        }
    }
</style>
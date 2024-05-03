<script lang="ts">
    import { fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    import RowContainer from '../shared/RowContainer.svelte';
    import Drawer from "../shared/Drawer.svelte";
    import ShoeVariants from '../shared/ShoeVariants.svelte';
    import ShoeActions from '../shared/ShoeActions.svelte';

    export let isDetailsDrawerOpen: boolean = false;
    export let shoe: any = {};
    export let currentShoeVariant: number = null;

    const dispatch = createEventDispatcher();

    const toggleDetailsDrawer = () => {
        dispatch('toggleDetailsDrawer');
    }

    const setVariant = (e) => {
        dispatch("setVariant", e.detail);
    };

    const fireSuccessToast = () => {
        dispatch("fireSuccessToast");
    };
</script>

<Drawer on:closeDrawer={toggleDetailsDrawer} isDrawerOpen={isDetailsDrawerOpen}>
    <div class="container">
        <div class="image-container">
            <img src="{shoe.image}" alt={shoe.title} in:fly={{ y: -50, duration: 2000 }} />
        </div>
        <div class="details-container">
            <h1 style="margin: 0">{shoe.title}</h1>

            {#if shoe.description}
                <p>{@html shoe.description}</p>
            {:else}
                <p style="width: 100%;">No description available</p>
            {/if}

            {#if shoe?.variants}
            <RowContainer style="width: 100%; flex-wrap: wrap; margin-bottom: 30px; justify-content: start; align-items: center;">
                <h2 style="margin-right: 10px;">Available Sizes:</h2>
                <ShoeVariants {shoe} {currentShoeVariant} on:setVariant={setVariant} />
            </RowContainer>

            <RowContainer style="width: 90%; flex-wrap: wrap;">
				<ShoeActions {shoe} {currentShoeVariant} on:toggleDetailsDrawer={toggleDetailsDrawer} on:fireSuccessToast={fireSuccessToast} />
            </RowContainer>
            {/if}
        </div>
    </div>
</Drawer>

<style>
    .container {
        display: flex;
        flex-direction: row;
        padding: 20px;
        align-items: center;
    }

    .image-container {
        max-width: 300px;
	}
    
    img {
        object-fit: contain;
        width: 100%;
    }

    .details-container {
        margin-left: 40px;
        flex-grow: 2;
    }

    @media (max-width: 720px) {
        .container {
            flex-direction: column;
            max-height: 50%;
            padding: 5px;
        }

        .details-container {
            margin-left: 0;
            margin-top: 20px;
            text-align: center;
        }
    }
</style>
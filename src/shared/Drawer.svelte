<script lang="ts">
    import { fly } from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import { createEventDispatcher } from "svelte";
	// import { onMount } from 'svelte';

    import Overlay from "./Overlay.svelte";

    export let isDrawerOpen = false;

    let dispatch = createEventDispatcher();

    export let location: string = 'bottom';

    const closeDrawer = () => {
        dispatch('closeDrawer');
    }

    let transitionDirection = location === 'bottom' ? 'x' : 'y';

    // Define a tweened variable to control the transition
    const flyX = tweened(0);
    const flyY = tweened(0);

    // Update the flyX or flyY based on the transition direction
    $: {
        if (transitionDirection === 'x') {
            flyX.set(transitionDirection === 'x' ? 100 : 0);
        } else {
            flyY.set(transitionDirection === 'y' ? 100 : 0);
        }
    }

    // onMount(() => {
	// 	if (isDrawerOpen) {
	// 		dispatch('animateImage');
	// 	}
  	// });
</script>


<Overlay handleClick={closeDrawer} />

{#if location === 'bottom'}
    <div class="drawer {location} {isDrawerOpen ? `${location}-show` : `${location}-hide`}" transition:fly={{y: isDrawerOpen ? 100 : 0 }}>
        <div class="action">
            <button class="close-button" on:click={closeDrawer}>X</button>
        </div>
        <slot></slot>
    </div>
{:else}
    <div class="drawer {location} {isDrawerOpen ? `${location}-show` : `${location}-hide`}" transition:fly={{x: isDrawerOpen ? 100 : 0 }}>
        <div class="action">
            <button class="close-button" on:click={closeDrawer}>X</button>
        </div>
        <slot></slot>
    </div>
{/if}

<style>
    .drawer {
        position: fixed;
        background-color: #fff;
        color: black;
        z-index: 500;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        transition: bottom 0.3s ease;
        box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
    }

    .action {
        width: 100%;
        text-align: right;
    }

    .bottom {
        bottom: 0;
        border-radius: 10px 10px 0 0;
    }

    .bottom-show {
        bottom: 0;
    }

    .bottom-hide {
        bottom: -300px;
    }

    .right {
        top: 0;
        right: 0;
        max-width: 30vw;
        min-width: 375px;
        border-radius: 0;
        height: 100vh;
        overflow-y: auto;
    }

    .right-show {
        right: 0;
    }

    .right-hide {
        right: -100px;
    }

    .left {
        top: 0;
        left: 0;
        width: 20vw;
    }

    .close-button {
		background-color: black;
		border: 3px solid black;
		width: 50px;
		height: 50px;
		border-radius: 50%;
        color: white;
        position: relative;
        top: 0;
        right: 0;
	}

    .close-button:hover {
        cursor: pointer;
		background-color: #a6f0ff;
        border: 3px solid #a6f0ff;
        color: black
    }

    @media (max-width: 960px) {
        .bottom {
            flex-direction: column;
            max-height: 75%;
            overflow-y: auto;
            min-width: 375px;
        }

        .right {
            width: 75vw;
            height: 100vh;
        }
    }
</style>
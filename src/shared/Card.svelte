<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let classes: string = '';
    export let style: string = '';

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('openDrawer');
    }
</script>

<div 
    class="card {classes}" style={style} on:click={() => handleClick()} on:keydown={() => {}}>
    <slot></slot>
</div>

<style>
    .card {
        padding: .5px;
        border-radius: 1rem;
        border: 5px solid white;
        background-color: white;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .card:hover {
        border: 5px solid #a6f0ff;
        cursor: pointer;
    }
</style>
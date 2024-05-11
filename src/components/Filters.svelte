<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import FilterAgeGroup from "./FilterAgeGroup.svelte";
    import FilterGender from "./FilterGender.svelte";
    import FilterSize from "./FilterSize.svelte";

    export let currentShoeSize: string = 'any';
    export let currentGender: string = 'any';
    export let currentAgeGroup: string = 'adults';

    let showSize = false;
   
    let dispatch = createEventDispatcher();

    const genderChange = (e) => {
        dispatch('genderChange', e.detail);
    }

    const ageGroupChange = (e) => {
        dispatch('ageGroupChange', e.detail);
    }

    const sizeChange = (e) => {
        dispatch('sizeChange', e.detail);
    }
</script>

<div class="filters">
    <FilterAgeGroup {currentAgeGroup} on:ageGroupChange={ageGroupChange} />
    <FilterGender {currentGender} on:genderChange={genderChange} />
    {#if showSize}
    <FilterSize {currentShoeSize} on:sizeChange={sizeChange} />
    {/if}
</div>

<style>
    .filters {
        display: flex;
        flex-direction: column;
        /* padding: 10px; */
        justify-content: center;
    }

    @media (max-width: 960px) {
        .filters {
            max-width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
</style>
<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let currentAgeGroup: string = "";
    const dispatch = createEventDispatcher();

    const ageGroupChange = (e) => {
        dispatch('ageGroupChange', e.target.value);
    }
</script>

<h2 style="text-align: center;">Age Group</h2>
<select bind:value={currentAgeGroup} on:change={ageGroupChange}>
    <option value="adults">Adults</option>
    <option value="kids">Kids</option>
</select>

<style>
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
<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let currentGender: string = 'any';
	const dispatch = createEventDispatcher();

	const genderChange = (e) => {
		dispatch('genderChange', e.target.value);
	};
</script>

<div class="filter-gender">
	<h1 class="title">Gender</h1>
	<select bind:value={currentGender} on:change={genderChange}>
		<option value="any">Any</option>
		<option value="male">Male</option>
		<option value="female">Female</option>
	</select>
</div>

<style>
	.filter-gender {
		margin: 0 5px 20px;
		flex: 1;
	}

	.title {
		margin-bottom: 10px;
		text-align: center;
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

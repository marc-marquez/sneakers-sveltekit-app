<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import FilterAgeGroup from './FilterAgeGroup.svelte';
	import FilterGender from './FilterGender.svelte';

	export let currentGender: string = 'any';
	export let currentAgeGroup: string = 'adults';

	let dispatch = createEventDispatcher();

	const genderChange = (e) => {
		dispatch('genderChange', e.detail);
	};

	const ageGroupChange = (e) => {
		dispatch('ageGroupChange', e.detail);
	};

	const sizeChange = (e) => {
		dispatch('sizeChange', e.detail);
	};
</script>

<div class="filters">
	<FilterAgeGroup {currentAgeGroup} on:ageGroupChange={ageGroupChange} />
	<FilterGender {currentGender} on:genderChange={genderChange} />
</div>

<style>
	.filters {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (max-width: 1024px) {
		.filters {
			max-width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
		}
	}
</style>

<script type="ts">
	export let handleClick;
</script>

<div class="overlay" on:click={handleClick} />

<style>
	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.85);
		top: 0;
		left: 0;
		z-index: 100;
	}

	.overlay:hover {
		cursor: pointer;
	}
</style>

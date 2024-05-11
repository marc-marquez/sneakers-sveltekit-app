<script lang="ts">
	export let style: string = '';
	export let classes: string = '';
</script>

<div class="column-container {classes}" {style}>
	<slot></slot>
</div>

<style>
	.column-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<script lang="ts">
    export let style: string = '';
    export let classes: string = '';
    export let handleClick;
    export let disabled: boolean = false;
</script>

<button class="{classes ? classes : 'circle-button'}" {style} on:click={handleClick} {disabled}>
    <slot></slot>
</button>

<style>
    .circle-button {
		background-color: black;
		border: 2px solid black;
		width: 50px;
		height: 50px;
		border-radius: 50%;
        color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px;
	}

	.circle-button:hover {
		cursor: pointer;
		border: 2px solid #a6f0ff;
		background-color: #a6f0ff;
		color: black;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.circle-button:disabled {
		cursor: not-allowed;
		border: 2px solid lightgrey;
		background-color: lightgrey;
		color: white;
	}

	@media (max-width: 480px) {
		/* .circle-button {
			width: 30px;
			height: 30px;
		} */
	}
</style>
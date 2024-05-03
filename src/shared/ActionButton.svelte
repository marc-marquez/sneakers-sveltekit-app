<script lang="ts">
    export let handleClick;
    // export let disabled: boolean = false;
</script>

<button class="button" on:click={handleClick}>
    <slot></slot>
</button>

<style>
    .button {
		background-color: black;
		border: 2px solid black;
		border-radius: 50%;
        color: white;
		display: flex;
		justify-content: center;
		align-items: center;
        padding: 10px;
	}

	.button:hover {
		cursor: pointer;
		border: 2px solid #a6f0ff;
		background-color: #a6f0ff;
		color: black;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.button:disabled {
		cursor: not-allowed;
		border: 2px solid lightgrey;
		background-color: lightgrey;
		color: white;
	}
</style>
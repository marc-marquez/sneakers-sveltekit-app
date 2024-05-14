<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import Overlay from './Overlay.svelte';

	export let isDrawerOpen = false;

	let dispatch = createEventDispatcher();

	export let location: string = 'bottom';

	const closeDrawer = () => {
		dispatch('closeDrawer');
	};
</script>

<Overlay handleClick={closeDrawer} />

{#if location === 'bottom'}
	<div
		class="drawer {location} {isDrawerOpen ? `${location}-show` : `${location}-hide`}"
		transition:fly|global={{ y: isDrawerOpen ? 100 : 0 }}
	>
		<div class="action">
			<button class="close-button" on:click={closeDrawer}>X</button>
		</div>
		<slot></slot>
	</div>
{:else if location === 'right'}
	<div
		class="drawer {location} {isDrawerOpen ? `${location}-show` : `${location}-hide`}"
		transition:fly|global={{ x: isDrawerOpen ? 100 : 0 }}
	>
		<div class="action">
			<button class="close-button" on:click={closeDrawer}>X</button>
		</div>
		<slot></slot>
	</div>
{:else if location === 'left'}
	<div
		class="drawer {location} {isDrawerOpen ? `${location}-show` : `${location}-hide`}"
		transition:fly|global={{ x: isDrawerOpen ? -100 : 0 }}
	>
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
		z-index: 200;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: start;
		transition: bottom 0.3s ease;
		box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
		width: 100%;
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

	.left,
	.right {
		top: 0;
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

	.left-show {
		left: 0;
	}

	.left-hide {
		left: -100px;
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
		margin: 10px;
	}

	.close-button:hover {
		cursor: pointer;
		background-color: #a6f0ff;
		border: 3px solid #a6f0ff;
		color: black;
	}

	@media (max-width: 1024px) {
		.bottom {
			flex-direction: column;
			max-height: 100%;
			overflow-y: auto;
			min-width: 375px;
		}

		.right {
			width: 75vw;
			height: 100vh;
		}

		.left {
			width: 100%;
			height: 100vh;
		}
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import UserStore from '../stores/UserStore';
	import { onDestroy, onMount } from 'svelte';

	export let type: string = '';

	let timeoutId: number;

	let icons = {
		add: 'fa-cart-plus',
		remove: 'fa-cart-shopping',
		favorite: 'fa-heart',
		unfavorite: 'fa-heart-crack'
	};

	// $: toastMessage = `${['add', 'favorite'].includes($UserStore.toast[0]?.type) ? 'Added' : 'Removed'}
	// 				   ${$UserStore?.toast[0]?.shoe?.title} 
	// 				   ${['add', 'favorite'].includes($UserStore.toast[0]?.type) ? 'to' : 'from'} 
	// 				   ${['add', 'remove'].includes($UserStore.toast[0]?.type) ? 'cart' : 'favorites'}.`;

	$: currentToast = $UserStore.toast[0];
	
	$: toastMessage = `${['add', 'favorite'].includes(currentToast?.type) ? 'Added' : 'Removed'}
					   ${currentToast?.shoe?.title} 
					   ${currentToast?.shoe?.size ? `(size: ${currentToast?.shoe?.size})` : ''} 
					   ${['add', 'favorite'].includes(currentToast?.type) ? 'to' : 'from'} 
					   ${['add', 'remove'].includes(currentToast?.type) ? 'cart' : 'favorites'}.`;


	onMount(() => {
		timeoutId = setTimeout(() => {
			UserStore.update((store) => {
				return {
					...store,
					toast: [{
						isShowing: false,
						type: store?.toast[0]?.type,
						shoe: store?.toast[0]?.shoe,
					}, ...store.toast.slice(1, store.toast.length)]
				};
			});
		}, 4000);
	});

	onDestroy(() => {
		clearTimeout(timeoutId);
		UserStore.update((store) => {
			return {
				...store,
				toast: [...store.toast.slice(1)]
			};
		});
	});
</script>

<div
	class="toast {type}"
	in:fly|global={{ y: 20, duration: 2000 }}
	out:fly|global={{ y: -20, duration: 2000 }}
>
	<i class={`fa-solid ${icons[type]}`} style="margin-right: 10px;"></i>
	<p class="message">{toastMessage}</p>
</div>

<style>
	.toast {
		position: fixed;
		top: 8vh;
		left: 50%;
		transform: translateX(-50%);
		width: 50vw;
		height: 40px;
		padding: 10px 20px;
		background-color: darkgrey;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 300;
		border-radius: 50px;
	}

	.add {
		background-color: darkgreen;
	}

	.remove {
		background-color: darkslategrey;
	}

	.favorite {
		background-color: darkred;
	}

	.unfavorite {
		background-color: orangered;
	}

	.message {
		margin: 0;
		text-align: center;
	}

	@media (max-width: 1024px) {
		.toast {
			width: 80vw;
		}
	}
</style>

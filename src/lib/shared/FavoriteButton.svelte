<script lang="ts">
	import FavoritesStore from '$lib/stores/FavoritesStore';
	import UserStore from '$lib/stores/UserStore';

	export let shoe: any = <any>{};

	$: isFavorited = $FavoritesStore.find((current) => current.id === shoe.id);

	const handleClick = () => {
		if (isFavorited) {
			let filtered = $FavoritesStore.filter((item) => item.id !== shoe.id);
			FavoritesStore.update((store) => {
				return [...filtered];
			});
			UserStore.update((store) => {
				return {
					...store,
					toast: [ ...store.toast, {
						type: 'unfavorite',
						shoe: {
							title: shoe.title,
							size: shoe.size
						},
						isShowing: true
					}],
				};
			});
			return;
		}

		FavoritesStore.update((store) => {
			return [...store, shoe];
		});

		UserStore.update((store) => {
			return {
				...store,
				toast: [ ...store.toast, {
					type: 'favorite',
					shoe: {
						title: shoe.title,
						size: shoe.size
					},
					isShowing: true
				}]
			};
		});
	};
</script>

<button class="favorite-button {isFavorited ? 'selected' : ''}" on:click={handleClick}>
	<i class="{isFavorited ? 'fa-solid' : 'fa-regular'} fa-heart" />
</button>

<style>
	.favorite-button {
		border: none;
		background-color: transparent;
		font-size: 24px;
		color: black;
	}

	.favorite-button:hover {
		cursor: pointer;
		color: red;
	}

	.selected {
		color: red;
	}
</style>

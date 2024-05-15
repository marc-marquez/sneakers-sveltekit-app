<script lang="ts">
	import FavoritesStore from '../stores/FavoritesStore';
	import UserStore from '../stores/UserStore';
	import type { ShoeType } from '../types/Shoe';

	export let shoe: any = <any>{};

	$: isFavorited = $FavoritesStore.find((current:ShoeType) => current.id === shoe.id);

	$: console.log($FavoritesStore);

	const handleClick = () => {
		if (isFavorited) {
			let filtered = $FavoritesStore.filter((item:ShoeType) => item.id !== shoe.id);
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
	<i class="fa-solid fa-heart" />
</button>

<style>
	.favorite-button {
		border: none;
		background-color: white;
		font-size: 24px;
		color: black;
	}

	.favorite-button:hover {
		cursor: pointer;
	}

	.selected {
		color: red;
	}
</style>

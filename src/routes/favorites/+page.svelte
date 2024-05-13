<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Favorites from '../../shared/Favorites.svelte';
	import PageLayout from '../../shared/PageLayout.svelte';

	const dispatch = createEventDispatcher();

	const fireToast = (e) => {
		dispatch('fireToast', e.detail);
	};
</script>

<PageLayout>
	<div class="favorites-page">
		<div class="photo">
			<div class="faves wording">Your Faves</div>
		</div>
		<div class="favorites">
			<Favorites on:fireToast={fireToast} />
		</div>
	</div>
</PageLayout>

<style>
	.favorites-page {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 10px;
		width: 100%;
		margin: 0 auto;
		grid-template-areas:
			'photo photo photo photo'
			'photo photo photo photo'
			'favorites favorites favorites favorites'
			'favorites favorites favorites favorites';
	}

	.photo {
		background: url(https://images.unsplash.com/photo-1552346154-21d32810aba3) no-repeat
			center/cover;
		grid-column: 1/3;
		grid-row: 1/8;
		text-align: center;
		position: relative;
		border-radius: 25px;
		grid-area: photo;
	}

	.wording {
		font-size: clamp(3rem, 8vw, 7rem);
		position: absolute;
	}

	.faves {
		top: 1rem;
		left: 2rem;
		color: white;
	}

	.favorites {
		grid-column: 3/6;
		grid-row: 1/8;
		grid-area: favorites;
	}

	@media (max-width: 1024px) {
		.favorites-page {
			grid-template-columns: 1fr;
			grid-template-areas:
				'photo'
				'photo'
				'favorites'
		}

		.photo {
			border-radius: 0;
		}
	}
</style>

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
			<div class="your wording">Your</div>
			<div class="faves wording">Faves</div>
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
			'photo photo favorites favorites'
			'photo photo favorites favorites'
			'photo photo favorites favorites'
			'photo photo favorites favorites'
			'photo photo favorites favorites'
			'photo photo favorites favorites'
			'photo photo favorites favorites';
	}

	.photo {
		background: url(https://images.unsplash.com/photo-1588117305388-c2631a279f82) no-repeat
			center/cover;
		grid-column: 1/3;
		grid-row: 1/8;
		text-align: center;
		position: relative;
		border-radius: 25px;
		grid-area: photo;
	}

	.wording {
		font-size: clamp(6rem, 8vw, 10rem);
		position: absolute;
	}

	.your {
		transform: rotate(-90deg);
		top: 4rem;
		left: 2rem;
	}

	.faves {
		top: 1rem;
		right: 6rem;
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
				'favorites';
		}

		.photo {
			border-radius: 0;
			background-position: center bottom -6rem;
		}

		.your {
			transform: rotate(0deg);
			color: white;
			top: 0;
			left: 1rem;
		}

		.faves {
			color: white;
			top: unset;
			bottom: 0;
			right: 1rem;
		}
	}
</style>

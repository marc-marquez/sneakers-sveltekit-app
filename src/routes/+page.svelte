<script lang="ts"></script>

<div class="content">
	<div class="one">
		<h1 class="display-text">Authentically.</h1>
		<h1 class="display-text">You.</h1>
		<a class="drip-link" href="/shop">
			<span>Find Your Drip<i class="fa-solid fa-droplet fa-beat icon" /></span></a
		>
	</div>
	<div class="two"></div>
	<div class="three"></div>
	<div class="four">
		<h1 class="display-text">Be</h1>
		<h1 class="display-text">Iconic.</h1>
	</div>
	<div class="five"></div>
	<div class="six">
		<h1 class="display-text">Make A</h1>
		<h1 class="display-text">Statement.</h1>
	</div>
</div>

<style>
	.content {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 20px;
		margin: 120px auto 20px auto;
		grid-template-areas:
			'one one one one one one one one two two two two'
			'one one one one one one one one two two two two'
			'one one one one one one one one two two two two'
			'three three three three three four four four two two two two'
			'three three three three three four four four two two two two'
			'three three three three three five five five five five five five'
			'six six six six six five five five five five five five'
			'six six six six six five five five five five five five';
		max-width: 1280px;
	}

	.display-text {
		color: #fff;
		font-size: clamp(5rem, 3vw, 8rem);
	}

	.drip-link {
		text-decoration: none;
		text-align: center;
		color: #000;
		font-size: clamp(2rem, 3vw, 3rem);
		background-color: white;
		border-radius: 25px;
	}

	.drip-link:hover {
		/* color: #fff; */
		background-color: #a6f0ff
	}

	.one {
		grid-column: 1/8;
		grid-row: 1/3;
		background-color: black;
		border-radius: 25px;
		display: grid;
		place-content: center;
		grid-area: one;
	}

	.two {
		grid-column: 8/13;
		grid-row: 1/6;
		background: url('https://images.unsplash.com/photo-1586525198428-225f6f12cff5') no-repeat
			center/cover;
		border-radius: 25px;
		grid-area: two;
	}

	.three {
		grid-column: 1/5;
		grid-row: 3/7;
		background: url('https://images.unsplash.com/photo-1611510338559-2f463335092c') no-repeat
			center/cover;
		border-radius: 25px;
		grid-area: three;
	}

	.four {
		grid-column: 5/8;
		grid-row: 3/6;
		background-color: blueviolet;
		display: grid;
		place-content: center;
		border-radius: 25px;
		grid-area: four;
	}

	.five {
		grid-column: 5/13;
		grid-row: 6/9;
		border-radius: 25px;
		background: url('https://images.unsplash.com/photo-1599069692326-7eeb159e6991') no-repeat
			bottom/cover;
		grid-area: five;
	}

	.six {
		grid-column: 1/5;
		grid-row: 7/9;
		border-radius: 25px;
		background-color: #9e1938;
		display: grid;
		place-content: center;
		grid-area: six;
	}

	h1 {
		margin: 0;
	}

	.icon {
		font-size: 1.25rem;
	}

	@media (max-width: 1024px) {
		.content {
			grid-template-columns: 1fr;
			grid-gap: 5px;
			grid-template-areas:
				'five'
				'one'
				'two'
				'four'
				'three'
				'six';
			margin: 80px 0 10px 0;
		}

		.content > div {
			margin-top: 0;
			padding: 15px 0;
			border-radius: 0;
		}

		.four {
			border-radius: 0;
		}

		.drip-link {
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		.five {
			background-position: center bottom -6rem;
		}
	}
</style>

<script lang="ts"></script>

<div class="content">
	<div class="one">
		<h1 class="display-text">Authentically.</h1>
		<h1 class="display-text">You.</h1>
	</div>
	<div class="two"></div>
	<div class="three"></div>
	<a class="display-text remove-underline four" href="/shop"
		><span>Find Your Drip<i class="fa-solid fa-droplet fa-beat icon" /></span></a
	>
	<div class="five"></div>
	<div class="six">
		<h1 class="display-text">Be</h1>
		<h1 class="display-text">Iconic.</h1>
	</div>
</div>

<style>
	.content {
		display: grid;
		margin: 0 auto;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 20px;
		margin-top: 100px;
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

	.remove-underline {
		text-decoration: none;
		margin: 0;
		text-align: center;
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
		background: url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a') no-repeat
			center/cover;
		border-radius: 25px;
		grid-area: two;
	}

	.three {
		grid-column: 1/5;
		grid-row: 3/7;
		background: url('https://images.unsplash.com/photo-1579338559194-a162d19bf842') no-repeat
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

	.four:hover {
		background-color: red;
		place-content: center;
		display: grid;
	}

	.five {
		grid-column: 5/13;
		grid-row: 6/9;
		border-radius: 25px;
		background: url('https://images.unsplash.com/photo-1552346154-21d32810aba3') no-repeat
			center/cover;
		grid-area: five;
	}

	.six {
		grid-column: 1/5;
		grid-row: 7/9;
		border-radius: 25px;
		background-color: orange;
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

	@media (max-width: 960px) {
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
			margin-top: 70px;
		}

		.content > div {
			margin-top: 0;
			padding: 15px 0;
			border-radius: 0;
		}

		.four {
			border-radius: 0;
		}
	}
</style>

<script lang="ts">
	export let message: string = '';
</script>

<div class="empty-state">
	<div class="box">
		<h1>{message}</h1>
	</div>
</div>

<style>
	/* .container {
		display: flex;
		flex-direction: column;
		height: 45vh;
		align-items: center;
		justify-content: center;
	} */

	.empty-state {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		height: 90svh;
	}

	.box {
		display: grid;
		place-items: center;
		background-color: #f0f0f0;
		/* border-radius: 25px; */
		padding: 20px;
		width: 93svw;
		height: 100svh;
		background: url('https://images.unsplash.com/photo-1648586383984-5555e558b1a9') no-repeat
			center/cover;
		color: white;
	}

	h1 {
		margin: 0;
		font-size: clamp(3rem, 8vw, 7rem);
	}
</style>

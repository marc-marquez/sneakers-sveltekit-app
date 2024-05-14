<script lang="ts">
	export let message: string = '';
</script>

<div class="empty-state">
	<div class="box">
		<h1>{message}</h1>
	</div>
</div>

<style>
	.empty-state {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		height: 90svh;
	}

	.box {
		display: grid;
		place-items: center;
		padding: 20px;
		width: 93svw;
		height: 90svh;
	}

	h1 {
		margin: 0;
		font-size: clamp(3rem, 8vw, 7rem);
	}
</style>

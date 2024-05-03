<div class="page-layout">
    <slot></slot>
</div>

<style>
    .page-layout {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 20px 50px;
		max-width: 1280px;
	}

	@media (max-width: 960px) {
		.page-layout {
			padding: 0;
			/* margin: 0; */
			min-width: 375px;
		}
	}
</style>
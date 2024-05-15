<script lang="ts">
    import CurrentShoeStore from '../stores/CurrentShoeStore';
    import UserStore from '../stores/UserStore';

    export let shoe: any = <any>{};
    export let orientation: 'horizontal' | 'vertical' = 'vertical';
    export let showBorder: boolean = true;
    export let customStyles: string = '';
    export let customImageStyles: string = '';
    export let showActions: boolean = false;

    const getShoeDetails = (e) => {
        CurrentShoeStore.update((store) => {
			return {
				...store,
				currentShoe: e,
                currentShoeVariant: null,
			};
		});

		UserStore.update((store) => {
			return {
				...store,
				isDetailsDrawerOpen: true,
			};
		});
    }

    const getLowestPrice = (shoe) => {
		return Math.min(...shoe.variants.map((variant) => variant.price));
	};
</script>

<div class="shoe-card {orientation} {showBorder ? 'show-border' : ''}" style={customStyles}>
    <button on:click={() => getShoeDetails(shoe)}>
        <div class="image-container">
            <img src={shoe.image} alt={shoe.name} style={customImageStyles} />
        </div>
    </button>
    <div class="details">
        <p style="font-size: .75rem;">{shoe.title}</p>
        <p style="font-size: .75rem; color: grey;">From ${getLowestPrice(shoe)}</p>
    </div>
    {#if showActions}
        <div class="actions">
            <button>Favorite</button>
            <button>Add to Cart</button>
        </div>
    {/if}
</div>

<style>
    .shoe-card {
        display: grid;
        grid-template-columns: 1fr;
        /* grid-auto-rows: 100%; */
        place-items: center;
        /* background-color: #f0f0f0; */
        /* width: 100%; */
    }

    img {
		object-fit: contain;
		width: 100%;
        aspect-ratio: 1;
        mix-blend-mode: multiply;
	}

    button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	button:hover {
		transform: scale(1.1);
        mix-blend-mode: multiply;
	}

    .horizontal {
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    .image-container {
        max-width: 150px;
        /* max-width: 200px; */
    }
    
    .show-border {
        border: 1px solid lightgrey;
        border-radius: 15px;
        padding: 1rem;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }

    .details {
        padding: .75rem;
    }
</style>
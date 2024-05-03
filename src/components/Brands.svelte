<script lang="ts">
    import { createEventDispatcher } from "svelte";
    
    export let currentBrand: string = '';
    export let brands: string[] = [];
    
    const dispatch = createEventDispatcher();
    
    const handleSetBrand = (brand: string) => {
        dispatch('handleSetBrand', brand);
    }
    
    </script>
    
    <div class="brands-container">
        {#each brands as brand (brand)}
        <button class="brand-button {currentBrand === brand ? 'selected' : ''}" on:click={() => handleSetBrand(brand)}>
            {#if brand === 'Jordan'}
                <img class="brand-image" alt="{brand} logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/250px-Jumpman_logo.svg.png" />
            {:else}
                <img class="brand-image" alt="{brand} logo" src="{`https://logo.clearbit.com/${brand.replace(/\s+/g, '')}.com`}?size=60" />
            {/if}
        </button>
        {/each}
    </div>
    
    <style>
        .brands-container {
            display: flex;
            flex-direction: column;
            padding: 10px;
        }
    
        .brands-container::-webkit-scrollbar {
            display: none;
        }
    
        .brand-button {
            background-color: white;
            border-left: 5px solid white;
            border: none;
            margin-bottom: 10px;
            border-left: 5px solid white;
            max-width: 60px;
            align-self: center;
        }
    
        .brand-image {
            object-fit: contain;
            width: 100%;
        }
    
        .brand-button:hover {
            cursor: pointer;
            border-left: 5px solid lightgrey;
        }
    
        .brand-button.selected {
            border-left: 5px solid #a6f0ff;
        }
    
        @media (max-width: 960px){
            .brands-container {
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: center;
                max-width: 100%;
            }
    
            .brand-button {
                margin-right: 5px;
                border-bottom: 5px solid white;
                max-width: 50px;
            }
    
            .brand-button:hover {
                border-left: none;
                border-bottom: 5px solid lightgrey;
            }
    
            .brand-button.selected {
                border-left: none;
                border-bottom: 5px solid #a6f0ff;
            }
        }
    </style>
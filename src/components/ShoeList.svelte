<script lang="ts">
    import { fly } from "svelte/transition";
    import {createEventDispatcher} from "svelte";
    import ColumnContainer from "../shared/ColumnContainer.svelte";
    import RowContainer from "../shared/RowContainer.svelte";
    import CircleButton from "../shared/CircleButton.svelte";
    import Card from "../shared/Card.svelte";

    export let shoes: Array<any> = [];
    export let currentPage: number = 0;
    export let totalPages: number = 0;
    export let isLoading: boolean = false;

    const dispatch = createEventDispatcher();

    $: lowIndex = currentPage === 1 ? 0 : (currentPage * 10);
    $: highIndex = lowIndex + 20;
    $: currentShoeList = shoes?.slice(lowIndex, highIndex);

    const getPrevPage = () => {
        dispatch('getPrevPage');
    }

    const getNextPage = () => {
        dispatch('getNextPage');
    }

    const getShoeDetails = (id: string) => {
        dispatch('getShoeDetails', id);
    }
</script>

<RowContainer style="flex-wrap: nowrap; align-items: flex-start; justify-content: end;">
    <CircleButton handleClick={() => getPrevPage()} disabled={currentPage <= 1}>
        <i class="fas fa-chevron-left" />
    </CircleButton>
    <CircleButton handleClick={() => getNextPage()} disabled={currentPage >= totalPages - 1}>
        <i class="fas fa-chevron-right" />
    </CircleButton>
</RowContainer>
<ColumnContainer style="flex:1;">
    {#each currentShoeList as shoe (shoe.id)}
    <RowContainer style="padding: 10px; border-top: 5px solid #a6f0ff; flex-wrap: nowrap; width: 100%; justify-content: space-between; align-items: center;">
            <h1 style="text-align: left; margin-top: 0">{shoe.title}</h1>
            {#if shoe.image}
            <Card on:openDrawer={() => getShoeDetails(shoe.id)}>
                {#if !isLoading}
                <div class="image-container">
                    <img src={shoe.image} alt={shoe.name} in:fly|global={{ y: -50, duration: 2000 }} />
                </div>
                {/if}
            </Card>
            {/if}
        <!-- </div> -->
    </RowContainer>
    <RowContainer style="padding: 10px; flex-wrap: nowrap; width: 100%;">
        {#if shoe.description}
                <p style="text-align: left">{@html shoe.description}</p>
            {:else}
                <p style="text-align: left;">No description available</p>
            {/if}
    </RowContainer>
    {/each}
</ColumnContainer>
<RowContainer style="flex-wrap: nowrap; align-items: flex-start; justify-content: end;">
    <CircleButton handleClick={() => getPrevPage()} disabled={currentPage <= 1}>
        <i class="fas fa-chevron-left" />
    </CircleButton>
    <CircleButton handleClick={() => getNextPage()} disabled={currentPage >= totalPages - 1}>
        <i class="fas fa-chevron-right" />
    </CircleButton>
</RowContainer>

<style>
    .image-container {
        max-width: 150px;
    }

    img {
        object-fit: contain;
        width: 100%
    }

    @media (max-width: 960px) {
        .image-container {
            max-width: 100px;
        }
    }
</style>
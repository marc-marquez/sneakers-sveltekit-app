<script lang="ts">
    import { fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import RowContainer from "../shared/RowContainer.svelte";
    import Card from "../shared/Card.svelte";
    import ColumnContainer from "../shared/ColumnContainer.svelte";
    import CircleButton from "../shared/CircleButton.svelte";

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

<div class="shoe-grid">
    <RowContainer style="align-items: flex-start; justify-content: center; flex: 1; align-self: center;">
        {#each currentShoeList as shoe, index (shoe.id)}
            {#if shoe.image}
            <Card on:openDrawer={() => getShoeDetails(shoe.id)}>
                {#if !isLoading}
                <div class="image-container">
                    <img src={shoe.image} alt={shoe.name} in:fly={{ y: -50, duration: 2000 }} />
                </div>
                {/if}
            </Card>
            {/if}
        {/each}
    </RowContainer>
    <RowContainer style="flex-wrap: nowrap; align-items: flex-start; justify-content: center;">
        <CircleButton handleClick={() => getPrevPage()} disabled={currentPage <= 1}>
            <i class="fas fa-chevron-left" />
        </CircleButton>
        <CircleButton handleClick={() => getNextPage()} disabled={currentPage >= totalPages - 1}>
            <i class="fas fa-chevron-right" />
        </CircleButton>
    </RowContainer>
</div>

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
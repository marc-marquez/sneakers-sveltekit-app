<script lang="ts">
    import { fly } from "svelte/transition";
    import ColumnContainer from "../shared/ColumnContainer.svelte";
    import RowContainer from "../shared/RowContainer.svelte";
    import Card from "../shared/Card.svelte";

    export let shoes;
</script>

<ColumnContainer style="flex:1;">
    {#each shoes as shoe (shoe.id)}
    <RowContainer style="padding: 10px; border-top: 5px solid #a6f0ff; flex-wrap: nowrap; width: 100%; justify-content: space-between; align-items: center;">
        <!-- <div style="margin-right: 20px; display: flex;"> -->
            <h1 style="text-align: left; margin-top: 0">{shoe.title}</h1>
            <div style="max-width: 200px;">
                <img style="object-fit: contain; width: 100%" src={shoe.image} alt={shoe.name} in:fly|global={{ y: -20, duration: 2000 }}/>
            </div>
        <!-- </div> -->
    </RowContainer>
    <RowContainer style="padding: 10px; flex-wrap: nowrap; width: 100%;">
        {#if shoe.description}
                <p style="text-align: left">{@html shoe.description}</p>
            {:else}
                <p style="text-align: left;">No description available</p>
            {/if}
    </RowContainer>
    <!-- <RowContainer style="justify-content: start;">
        {#each shoe?.variants as variant (variant.size)}
            <Card style="width: 80px; height: 40px; margin: 1px;">
                <span>Size: {variant.size}</span>
                <span>${variant.price}</span>
            </Card>
        {/each}
    </RowContainer> -->
    {/each}
</ColumnContainer>

<style>
</style>
<script lang="ts">
    import PageLayout from "../../shared/PageLayout.svelte";
    import CartItems from "../../shared/CartItems.svelte";
    import CartStore from "../../stores/CartStore";

    let personFields = ['name', 'email', 'address', 'city', 'state', 'zip', 'country'];
    let creditFields = ['number', 'month', 'year', 'cvv'];
</script>

<PageLayout>
    <div class="checkout">
        <h1>Checkout</h1>
        {#if $CartStore.length === 0}
            <h2>Your cart is empty</h2>
        {:else}
            <CartItems />
        {/if}
        <form>
            <div class="box">
                {#each personFields as field}
                    <div class="field">
                        <label for={field}>{field}</label>
                        <input style="margin-left: 20px;" type="text" id={field} name={field} required>
                    </div>
                {/each}
            </div>
            <div class="box">
                {#each creditFields as field}
                    <div class="field">
                        <label for={field}>{field}</label>
                        <input style="margin-left: 20px;" type="text" id={field} name={field} required>
                    </div>
                {/each}
            </div>
            
        </form>
        <button type="submit">Submit</button>
    </div>
</PageLayout>

<style>
    .checkout {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .field {
        display: flex;
        align-items: center;
        justify-self: flex-end;
    }

    .box {
        display: grid;
        grid-template-columns: 1fr;
        place-items: flex-start;
        padding: 20px;
        align-items: start;
    }

    label, input {
        margin: 10px;
        font-size: 24px;
        font-weight: 900;;
    }

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        grid-gap: 20px;
        border: 1px solid darkgrey;
        background-color: lightgrey;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    button {
        border: none;
        background-color: lightgrey;
        font-size: 20px;
        font-weight: 900;
        border-radius: 50px;
        padding: 10px 20px;
    }

    @media (max-width: 720px) {
        form {
            grid-template-columns: 1fr;
            grid-gap: 0;
            width: 80vw;
        }

        .box {
            padding: 20px;
            place-items: start;
        }
    }

</style>
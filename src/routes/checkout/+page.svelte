<script lang="ts">
    import PageLayout from "../../shared/PageLayout.svelte";
    import CartItems from "../../shared/CartItems.svelte";

    let personFields = ['name', 'email', 'address', 'city', 'state', 'zip', 'country'];
    let creditFields = ['number', 'month', 'year', 'cvv'];
</script>

<PageLayout>
    <div class="checkout">
        <h1>Checkout</h1>
        <CartItems />
        <form>
            <div class="box">
                {#each personFields as field}
                    <div style="display: flex; justify-content: space-between;">
                        <label for={field}>{field}</label>
                        <input style="margin-left: 20px;" type="text" id={field} name={field} required>
                    </div>
                {/each}
            </div>
            <div class="box">
                {#each creditFields as field}
                    <div style="display: flex; justify-content: space-between;">
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

    .box {
        display: grid;
        grid-template-columns: 1fr;
        place-items: flex-end;
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
        border-radius: 50px;
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

</style>
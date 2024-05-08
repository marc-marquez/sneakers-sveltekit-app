<script lang="ts">
    import PageLayout from "../../shared/PageLayout.svelte";
    import CartItems from "../../shared/CartItems.svelte";

    let fields = ['name', 'email', 'address', 'city', 'state', 'zip', 'country'];
</script>

<PageLayout>
    <div class="checkout">
        <h1>Checkout</h1>
        <CartItems />
        <div class="box">
            <form>
                {#each fields as field}
                    <div style="display: flex; justify-content: space-between;">
                        <label for={field}>{field}</label>
                        <input style="margin-left: 20px;" type="text" id={field} name={field} required>
                    </div>
                {/each}
                <button type="submit">Submit</button>
            </form>
        </div>
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
        border: 1px solid black;
        border-radius: 10px;
        flex: 1;
        width: 100%;
        place-items: center;
        padding: 20px;
        background-color: #fafafa
    }

    label, input {
        margin: 10px;
        font-size: 24px;
        font-weight: 900;;
    }

    form {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 10px;
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
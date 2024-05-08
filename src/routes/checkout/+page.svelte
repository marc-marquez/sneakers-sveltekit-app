<script lang="ts">
    import PageLayout from "../../shared/PageLayout.svelte";

    let fields = ['name', 'email', 'address', 'city', 'state', 'zip', 'country'];
</script>

<PageLayout>
    <div class="checkout">
        <h1>Checkout</h1>
        <div class="box">
            <form style="display: flex; flex-direction: column; justify-content: center; gap: 20px;">
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
    }

    .box {
        padding: 20px;
        border: 1px solid black;
        border-radius: 10px;
        flex: 1;
    }

</style>
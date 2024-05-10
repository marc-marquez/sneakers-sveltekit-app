<script lang="ts">
    import PageLayout from "../../shared/PageLayout.svelte";
    import CartItems from "../../shared/CartItems.svelte";
    import CartStore from "../../stores/CartStore";
    import CollapsibleCard from "../../shared/CollapsibleCard.svelte";
	import CartTotal from "../../shared/CartTotal.svelte";
	import CartActions from "../../shared/CartActions.svelte";

    let personFields = ['first', 'last', 'email'];
    let creditFields = ['number', 'month', 'year', 'cvv'];
    let shippingFields = ['street', 'city', 'state', 'zip', 'country']

    let isCollapsed = true;
    
    const toggleCollapse = () => {
        isCollapsed = !isCollapsed;
    }
</script>

<!-- <PageLayout> -->
    <div class="checkout">
        <div id="info">
            <h1 style="text-align: left;">Checkout</h1>        
            <CollapsibleCard title="Contact Info">
                <div class="fields">
                    {#each personFields as field}
                    <div class="field">
                        <label for={field}>{field}</label>
                        <input style="margin-left: 20px;" type="text" id={field} name={field} required>
                    </div>
                    {/each}
                </div>
            </CollapsibleCard>
            <CollapsibleCard title="Shipping Info">
                <div class="fields">
                    {#each shippingFields as field}
                    <div class="field">
                        <label for={field}>{field}</label>
                        <input style="margin-left: 20px;" type="text" id={field} name={field} required>
                    </div>
                    {/each}
                </div>
            </CollapsibleCard>
            <CollapsibleCard title="Payment Method">
                <div class="fields">
                    {#each creditFields as field}
                    <div class="field">
                        <label for={field}>{field}</label>
                        <input style="margin-left: 20px;" type="text" id={field} name={field} required>
                    </div>
                    {/each}
                </div>
            </CollapsibleCard>
        </div>
        <div id="cart">
            <h1 style="text-align: left;">Cart</h1>
            <CartItems />
            <div style="text-align: right;">
                <CartTotal />
            </div>
            <CartActions />
        </div>
    </div>
<!-- </PageLayout> -->

<style>
    #info {
        background-color: #efefef;
        padding: 20px;
        border-radius: 45px 0 0 45px;
        grid-area: info;
    }

    #cart {
        background-color: #fff;
        padding: 20px;
        border-radius: 45px;
        grid-area: cart;
    }

    .checkout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: minmax(150px, auto);
        max-width: 1280px;
        /* height: 50vh; */
        margin: 0 auto;
        margin-top: 40px;
        grid-gap: 20px;
        border-radius: 50px;
        border: 5px solid #a6f0ff;
        grid-template-areas: "info cart";
    }

    h1, h2 {
        margin: 0;
    }

    .field {
        display: grid;
        grid-template-columns: 1fr 6fr;
    }

    .box {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
    }

    label, input {
        margin: 10px;
        font-size: 24px;
        font-weight: 900;;
    }

    @media (max-width: 960px) {

        .checkout {
            grid-template-columns: 1fr;
            height: unset;
            border-radius: 0;
            border: none;
            grid-template-areas: "cart" "info";
        }

        #info {
            border-radius: 0;
        }
    }

</style>
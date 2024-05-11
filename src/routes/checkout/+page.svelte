<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import PageLayout from "../../shared/PageLayout.svelte";
    import CartItems from "../../shared/CartItems.svelte";
    import CollapsibleCard from "../../shared/CollapsibleCard.svelte";
	import CartTotal from "../../shared/CartTotal.svelte";
	import CartActions from "../../shared/CartActions.svelte";

    let personFields = ['first', 'last', 'email'];
    let creditFields = ['number', 'month', 'year', 'cvv'];
    let shippingFields = ['street', 'city', 'state', 'zip', 'country']

    const dispatch = createEventDispatcher();

    const fireToast = (e) => {
        dispatch('fireToast', e.detail);
    }
</script>

<PageLayout>
    <div class="checkout">
        <div id="header-image">
            <div class="wording">Checkout</div>
        </div>
        <div id="info">
            <h1 style="text-align: left;">The Details</h1>        
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
            <CartItems on:fireToast={fireToast} />
            <div style="text-align: right;">
                <CartTotal />
            </div>
            <div class="desktop-cart-actions">
                <CartActions />
            </div>
        </div>
        <div class="mobile-cart-actions">
            <CartActions />
        </div>
</PageLayout>

<style>
    #info {
        background-color: #efefef;
        padding: 20px;
        grid-area: info;
    }

    #cart {
        background-color: #fff;
        padding: 20px;
        grid-area: cart;
        display: grid;
        grid-template-columns: 1fr;
    }

    #header-image {
        grid-area: header;
        position: relative;
    }

    .checkout {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: minmax(250px, auto);
        max-width: 1280px;
        margin: 0 auto;
        grid-gap: 10px;
        grid-template-areas: 
        "header header header"
        "header header header"
        "info info cart"
        "info info cart";
        width: 100%;
    }

    .wording {
        font-size: clamp(6rem, 8vw, 10rem);
        position: absolute;
        color: black;
        bottom: 1rem;
        left: 2rem;
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

    
    .mobile-cart-actions {
        display: none;
    }

    .desktop-cart-actions {
        display: block;
    }

    #header-image {
        background: url('https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8') no-repeat center/cover;
        background-position: center bottom -2rem;
    }

    @media (max-width: 960px) {
        .checkout {
            grid-template-columns: 1fr;
            height: unset;
            border-radius: 0;
            border: none;
            grid-template-areas: "header" "cart" "info";
            margin: 0;
            width: 100%;
        }

        #info {
            border-radius: 0;
        }

        .desktop-cart-actions {
            display: none;
        }

        .mobile-cart-actions {
            display: block;
            width: 70%;
            margin: 0 auto;
        }

        #header-image {
            background-position: center bottom;
        }
    }

</style>
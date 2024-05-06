<script lang="ts">
    import PageLayout from "../../shared/PageLayout.svelte";
</script>

<PageLayout>
    <h1>Checkout</h1>
    <div >
        <form style="display: flex; flex-direction: column; justify-content: center;">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="address">Address</label>
            <input type="text" id="address" name="address" required>
            <label for="city">City</label>
            <input type="text" id="city" name="city" required>
            <label for="state">State</label>
            <input type="text" id="state" name="state" required>
            <label for="zip">Zip</label>
            <input type="text" id="zip" name="zip" required>
            <label for="country">Country</label>
            <input type="text" id="country" name="country" required>
            <button type="submit">Submit</button>
        </form>
    </div>
</PageLayout>

<style></style>
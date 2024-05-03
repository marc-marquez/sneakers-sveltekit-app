<script lang="ts">
    export let style: string = '';
    export let classes: string = '';
</script>

<div class="row-container {classes}" {style}>
    <slot></slot>
</div>

<style>
    .row-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
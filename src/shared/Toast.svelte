<script lang="ts">
    import { fly } from 'svelte/transition'
    export let message: string = 'test message';
    export let type: string = '';
</script>

<div class="toast {type}" in:fly={{ y: -20, duration: 2000 }} out:fly={{ y: 20, duration: 2000 }}>
    <p class="message">{message}</p>
</div>

<style>
    .toast {
        position: absolute;
        top: 1vh;
        width: 40vw;
        height: 40px;
        padding: 10px 20px;
        background-color: darkgrey;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 200;
    }

    .success {
        background-color: darkseagreen;
        color: white;
    }

    .failure {
        background-color: darkred;
        color: white;
    }

    .message {
        margin: 0;
        text-align: center;
    }
</style>
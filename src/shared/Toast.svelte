<script lang="ts">
    import { fly } from 'svelte/transition'
    export let message: string = 'test message';
    export let type: string = '';
</script>

<div class="toast {type}" in:fly|global={{ y: -20, duration: 2000 }} out:fly|global={{ y: 20, duration: 2000 }}>
    <p class="message">{message}</p>
</div>

<style>
    .toast {
        position: fixed;
        top: 5vh;
        width: 50vw;
        height: 40px;
        padding: 10px 20px;
        background-color: darkgrey;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 200;
        border-radius: 50px;
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

    @media (max-width: 768px) {
        .toast {
            width: 80vw;
        }
    }
</style>
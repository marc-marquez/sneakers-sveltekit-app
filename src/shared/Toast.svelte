<script lang="ts">
    import { fly } from 'svelte/transition'
    export let message: string = 'test message';
    export let type: string = '';

    let icons = {
        success: 'fa-check-circle',
        failure: 'fa-times-circle',
        favorite: 'fa-heart'
    }
</script>

<div class="toast {type}" in:fly|global={{ y: 20, duration: 2000 }} out:fly|global={{ y: -20, duration: 2000 }}>
    <i class={`fa-solid ${icons[type]}`} style="margin-right: 10px;"></i>
    <p class="message">{message}</p>
</div>

<style>
    .toast {
        position: fixed;
        top: 50vh;
        bottom: 30vh;
        width: 50vw;
        height: 40px;
        padding: 10px 20px;
        background-color: darkgrey;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 300;
        border-radius: 50px;
    }

    .success {
        background-color: darkgreen;
        color: white;
    }

    .failure {
        background-color: darkblue;
        color: white;
    }

    .favorite {
        background-color: darkred;
        color: white;
    }

    .message {
        margin: 0;
        text-align: center;
    }

    @media (max-width: 920px) {
        .toast {
            width: 80vw;
            top: unset;
            bottom: 5vh;
        }
    }
</style>
<script>
    import '../app.css'
</script>

<div class="homepage">
    <section>
        <div>
            <div class="text">AUTHENTICALLY.</div>
            <div class="text">YOU<i class="fa-solid fa-droplet fa-beat icon"></i></div>
            <a href="/shop">Find Your Drip</a>
        </div>
    </section>
</div>

<style>
    .homepage {
        margin: 0 auto;
    }

    section {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        height: 100vh;
        scroll-behavior: smooth;
    }

    .text {
        font-size: clamp(4rem, 8vw, 15rem);
        font-weight: 900;
    }

    .icon {
        font-size: 2rem;
    }

    a {
        font-size: clamp(3rem, 8vw, 5rem);
        font-weight: 900;
    }

    
</style>
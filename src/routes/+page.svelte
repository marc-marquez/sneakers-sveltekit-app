<script>
	import { onDestroy, onMount } from 'svelte';
    import '../app.css'
    import BRANDS from '../constants/Brands';

    let words = ['DISTINCTIVE', 'UNIQUE', 'SIGNATURE', 'INDIVIDUAL', 'MEMORABLE', 'ICONIC'];

    let wordIntervalId;
    let brandIntervalId;

    onMount(() => {
        let wordIndex = 0;
        let brandIndex = 0;

        wordIntervalId = setInterval(() => {
            if (wordIndex === words.length - 1) {
                wordIndex = 0;
            } else {
                wordIndex++;
            }
            document.querySelector('.rotate-words').innerHTML = words[wordIndex]+'.';
        }, 5000);

        brandIntervalId = setInterval(() => {
            if (brandIndex === BRANDS.length - 1) {
                brandIndex = 0;
            } else {
                brandIndex++;
            }

            if (BRANDS[brandIndex].toString() === 'Jordan') {
                document.querySelector('.rotate-brands').src = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/250px-Jumpman_logo.svg.png';
            } else {
                document.querySelector('.rotate-brands').src = `https://logo.clearbit.com/${BRANDS[brandIndex].replace(/\s+/g, '')}.com?size=350&format=png`;
            }
            document.querySelector('.rotate-brands').alt = BRANDS[brandIndex];
        }, 5000);
    });

    onDestroy(() => {
        clearInterval(wordIntervalId);
        clearInterval(brandIntervalId);
    });
</script>

<div class="homepage">
    <section style="background-color: black; color: white;">
        <div style="text-align: left;">
            <div class="text">AUTHENTICALLY.</div>
            <div class="text">YOU<i class="fa-solid fa-droplet fa-beat icon"></i></div>
            <a href="/shop">Find Your Drip</a>
        </div>
    </section>
    <section style="background-color: white; color: black;">
        <div style="display: flex; flex-direction: column; align-items: center; width: 100%; justify-content: center;">
            <div style="max-width: 500px;">
                <img src="https://images.stockx.com/images/Jordan-11-Retro-Space-Jams-2016-Product.jpg" alt="Jordan 11 Retro Space Jams" style="object-fit; width: 100%;"/>
            </div>
            <div class="text tagline">WHERE EVERY STRIDE IS A SIGNATURE STATEMENT.</div>
        </div>
    </section>
    <section style="background-color: black; color: white; height: 100%;">
        <div class="grid-container">
            <div class="image-grid">
                <div class="image-container">
                    <img class="image" src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Red White Jordans" />
                </div>
                <div class="image-container">
                    <img class="image" src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jordan 1" />
                </div>
                <div class="image-container">
                    <img class="image" src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jordan 1" />
                </div>
                <div class="image-container">
                    <img class="image" src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jordan 1" />
                </div>
                <div class="image-container">
                    <img class="image" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jordan 1" />
                </div>
                <div class="image-container">
                    <img class="image" src="https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jordan 1" />
                </div>
            </div>
        </div>
    </section>
    <section style="background-color: white; color: black;">
        <div class="two-grid">
            <div class="tile rotate-words-tile">
                <div class="text rotate-words">DISTINCTIVE.</div>
            </div>
            <div class="tile">
                <div>
                    <img class="rotate-brands" src={`https://logo.clearbit.com/${BRANDS[0].replace(/\s+/g, '')}.com?size=250`} alt="{BRANDS[0]} Logo" />
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .homepage {
        margin: 0 auto;
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
    }

    section {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        height: 90vh;
    }

    .text {
        font-size: clamp(4rem, 8vw, 10rem);
        font-weight: 900;
    }

    .icon {
        font-size: 2rem;
    }

    a {
        font-size: clamp(3rem, 8vw, 5rem);
        font-weight: 900;
    }

    .two-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .tile {
        background-color: white;
        display: grid;
        place-items: center;
        padding: 20px;
        border-radius: 25px;
    }

    img {
        transition: opacity 0.5s ease;
    }

    .tagline {
        font-size: clamp(3rem, 6vw, 8rem);
    }

    .rotate-words-tile {
        background-color: white;
        color: black;
    }

    .grid-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    
    .image-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
    }

    .image-container {
        width: 300px;
        max-width: 300px;
        height: 450px;
    }

    .image {
        object-fit: cover;
        width: 100%;
        height: 450px;
        border-radius: 20px;

    }

    @media (max-width: 960px) {
        .two-grid {
            grid-template-columns: 1fr;
        }

        section {
            margin: 0;
        }

        .tagline {
            text-align: center;
        }
    }

    @media (max-width: 720px) {
        .image-container {
            width: 100%;
            height: 300px;
        }

        .image {
            height: 300px;
        }
    }

</style>
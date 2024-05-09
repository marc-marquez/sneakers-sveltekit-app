<script>
	import { onMount } from 'svelte';
    import '../app.css'
	import { fade } from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import BRANDS from '../constants/Brands';

    let words = ['DISTINCTIVE', 'UNIQUE', 'SIGNATURE', 'INDIVIDUAL', 'MEMORABLE', 'ICONIC'];

    const rotateWords = () => {
        let index = 0;
        setInterval(() => {
            if (index === words.length - 1) {
                index = 0;
            } else {
                index++;
            }
            document.querySelector('.rotate-words').innerHTML = words[index]+'.';
        }, 5000);
    }

    const rotateBrands = () => {
        let index = 0;

        setInterval(() => {
            if (index === BRANDS.length - 1) {
                index = 0;
            } else {
                index++;
            }

            if (BRANDS[index].toString() === 'Jordan') {
                document.querySelector('.rotate-brands').src = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/250px-Jumpman_logo.svg.png';
            } else {
                document.querySelector('.rotate-brands').src = `https://logo.clearbit.com/${BRANDS[index].replace(/\s+/g, '')}.com?size=350&format=png`;
            }
            document.querySelector('.rotate-brands').alt = BRANDS[index];
        }, 5000);
    }

    onMount(() => {
        // rotateWords();
        // rotateBrands();
    });
</script>

<div class="homepage">
    <section>
        <div style="text-align: left;">
            <div class="text">AUTHENTICALLY.</div>
            <div class="text">YOU<i class="fa-solid fa-droplet fa-beat icon"></i></div>
            <a href="/shop">Find Your Drip</a>
        </div>
    </section>
    <!-- <section style="background-color: white; color: black;">
        <div>
            <div style="text-align: center;">
                <img src="https://images.stockx.com/images/Jordan-11-Retro-Space-Jams-2016-Product.jpg" alt="Jordan 11 Retro Space Jams" style="object-fit; width: 100%;"/>
            </div>
            <div class="text">WHERE EVERY STRIDE IS A SIGNATURE STATEMENT.</div>
        </div>
    </section> -->
    <!-- <section>
        <div class="two-grid">
            <div class="tile">
                <div class="text rotate-words">DISTINCTIVE.</div>
            </div>
            <div class="tile">
                <div>
                    <img class="rotate-brands" src={`https://logo.clearbit.com/${BRANDS[0].replace(/\s+/g, '')}.com?size=350`} alt="{BRANDS[0]} Logo" />
                </div>
            </div>
        </div>
    </section> -->
</div>

<style>
    .homepage {
        margin: 0 auto;
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        max-width: 1280px;
    }

    section {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        height: 100vh;
        /* margin: 100px; */
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
        /* width: 35vw; */
        /* width: 100%; */
        /* height: 300px; */
        /* background-color: lightgrey; */
        display: grid;
        place-items: center;
        /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); */
        padding: 20px;
    }

    img {
        transition: opacity 0.5s ease;
    }

    @media (max-width: 960px) {
        .two-grid {
            grid-template-columns: 1fr;
        }

        .tile {
            /* width: 90vw; */
            /* height: 20vh; */
        }

        section {
            margin: 0;
        }
    }

    
</style>
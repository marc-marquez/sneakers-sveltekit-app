<script>
	import { onMount } from 'svelte';
    import '../app.css'
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
        rotateWords();
        rotateBrands();
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
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="max-width: 500px;">
                <img src="https://images.stockx.com/images/Jordan-11-Retro-Space-Jams-2016-Product.jpg" alt="Jordan 11 Retro Space Jams" style="object-fit; width: 100%;"/>
            </div>
            <div class="text tagline">WHERE EVERY STRIDE IS A SIGNATURE STATEMENT.</div>
        </div>
    </section>
    <section style="background-color: black; color: white;">
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
        background-color: black;
        color: white;
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


</style>
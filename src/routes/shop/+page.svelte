<script lang="ts">
	import { onMount } from 'svelte';

	import Header from "../../shared/Header.svelte";
	import Brands from '../../components/Brands.svelte';
	import ShoeFeatured from '../../components/ShoeFeatured.svelte';
    import Filters from '../../components/Filters.svelte';
    import ShoeGrid from '../../components/ShoeGrid.svelte';
    import ShoeList from '../../components/ShoeList.svelte';
    import PageLayout from '../../shared/PageLayout.svelte';
    import ShoeDrawer from '../../components/ShoeDrawer.svelte';
    import FavoritesDrawer from '../../components/FavoritesDrawer.svelte';
	import MenuDrawer from '../../components/MenuDrawer.svelte';

    import StarRating from '../../shared/StarRating.svelte';
    import CircleButton from '../../shared/CircleButton.svelte';
    import LoadingState from '../../shared/LoadingState.svelte';
    import EmptyState from '../../shared/EmptyState.svelte';
    import CartDrawer from '../../components/CartDrawer.svelte';
    import Toast from '../../shared/Toast.svelte';
    import ShoeVariants from '../../shared/ShoeVariants.svelte';
    import ShoeActions from '../../shared/ShoeActions.svelte';

	import BRANDS from '../../constants/Brands';
	import DISPLAY_FORMAT from '../../constants/DisplayFormat';

	import CurrentShoeStore from '../../stores/CurrentShoeStore';
    import UserStore from '../../stores/UserStore';

	let brands = BRANDS;
    let shoes = [];
	let originalShoes = [];
    let totalPages: number = 0;
    let currentPage: number = 1;
    let currentBrand = brands[0];
    let isDetailsDrawerOpen = false;
	let isCartOpen = false;
	let isFavoritesOpen = false;
	let isLoading = false;
	let successToast = false;
	let favoriteToast = false;
	let isMenuDrawerOpen = false;
	let showError = false;
	let companyName = 'The Drip';
	let showToast = '';

	let currentShoeSize = '';

	$: currentShoe = $CurrentShoeStore?.currentShoe;
	$: currentShoeIndex = $CurrentShoeStore?.currentShoeIndex;
	$: currentShoeVariant = $CurrentShoeStore?.currentShoeVariant;

    // $: displayFormat = $UserStore?.displayFormat || DISPLAY_FORMAT.featured;

	$: toastMessage = `${['add', 'favorite'].includes(showToast?.type) ? 'Added' : 'Removed'} ${showToast?.shoe?.title} ${['add', 'favorite'].includes(showToast?.type) ? 'to' : 'from'} ${['add', 'remove'].includes(showToast?.type) ? 'cart' : 'favorites'}.`;

	let currentGender = 'any';
	let currentAgeGroup = 'adults';
	
	// DOCUMENTATION - https://stockx.vlour.me/
	const getData = (brand, page, gender, age, size) => {
		isLoading = true;
        fetch(`https://api.stockx.vlour.me/search?query=${brand} ${age} ${gender} ${size ? `size ${size}` : '' } shoes&page=${page}`)
            .then(response => response.json())
            .then(data => {
				if (currentPage === 1) {
					originalShoes = [...data.hits];
					CurrentShoeStore.update(shoeInfo => {
						return { 
							...shoeInfo, 
							currentShoeIndex: 0,
						};
					});
				} else {
                	originalShoes = [...originalShoes, ...data.hits];
				}

                totalPages = data.pages;
				
				originalShoes.forEach(shoe => {
					shoe.rating = Math.floor(Math.random() * 6);
					shoe.variants.forEach(variant => {
						variant.size = variant.size.replace(/[YCWK]/g, '');
					});
					shoe.variants.sort((a, b) => a.size - b.size);
				});

				shoes = originalShoes;

				CurrentShoeStore.update(shoeInfo => {
					return {
						...shoeInfo,
						currentShoe: shoes?.[$CurrentShoeStore.currentShoeIndex],
						currentShoeVariant: null
					};
				});

				isLoading = false;
            })
			.catch(err => {
				console.error(err);
				isLoading = false;
			});
    }

	const setBrandAndGet = (brand) => {
        currentBrand = brand;
        currentPage = 1;
        getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
    };

	const toggleDetailsDrawer = () => {
        isDetailsDrawerOpen = !isDetailsDrawerOpen;
    };

	const getShoeDetails = (e) => {
		if (!e.detail) {
			console.error('No shoe id provided.');
			return;
		} 

		isDetailsDrawerOpen = true;
		let found = getShoeById(e?.detail);

		if (!found) {
			console.error('Could not find shoe details.');
			return;
		}

		CurrentShoeStore.update(shoeInfo => {
			return { 
				...shoeInfo, 
				currentShoe: found,
				currentShoeIndex: null,
				currentShoeVariant: null
			};
		});
	}

	const getNextPage = () => {
        currentPage+=1;
        getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
    }

    const getPrevPage = () => {
        if (currentPage > 1) {
            currentPage-=1;
        }

        getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
    }

	onMount(() => {
		setBrandAndGet(currentBrand);
	});

	const setVariant = (e) => {
		CurrentShoeStore.update(shoeInfo => {
			return { 
				...shoeInfo, 
				currentShoeVariant: e.detail
			};
		});
	}

	const nextShoe = () => {
		CurrentShoeStore.update(shoeInfo => {
			return { 
				...shoeInfo, 
				currentShoe: shoes?.[currentShoeIndex+1],
				currentShoeIndex: shoeInfo.currentShoeIndex+1,
				currentShoeVariant: null
			};
		});

		if ($CurrentShoeStore.currentShoeIndex === shoes.length - 1) {
			currentPage+=1;
			getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
		}
	}

	const prevShoe = () => {
		CurrentShoeStore.update(shoeInfo => {
			return { 
				...shoeInfo, 
				currentShoe: shoes?.[currentShoeIndex-1],
				currentShoeIndex: shoeInfo.currentShoeIndex-1,
				currentShoeVariant: null
			};
		});
	}

	const setGender = (e) => {
		currentGender = e.detail;
		getData(currentBrand, 1, currentGender, currentAgeGroup, currentShoeSize);
	}

	const setAgeGroup = (e) => {
		currentAgeGroup = e.detail;
		getData(currentBrand, 1, currentGender, currentAgeGroup, currentShoeSize);
	}

	const setShoeSize = (e) => {
		currentShoeSize = e.detail;
		getData(currentBrand, 1, currentGender, currentAgeGroup, currentShoeSize);
	}

	const setDisplayFormat = (e) => {
		console.log('On change triggered.');
        UserStore.update(userInfo => {
            return { 
                ...userInfo, 
                displayFormat: e.target.value,
            };
        });
	}

	const openCart = () => {
		isCartOpen = true;
	}

	const toggleCart = () => {
		isCartOpen = !isCartOpen;
	}

	const getShoeById = (id: string) => {
		if (!id) { 
			console.error('No id sent in getShoeById');
			return; 
		}

		let found = shoes.find((shoe) => shoe.id === id);
		
		if (!found) {
			console.error('No shoe found in getShoeById');
			return; 
		}

		return found;
	};

	const openFavorites = () => {
		isFavoritesOpen = true;
	}

	const toggleFavorites = () => {
		isFavoritesOpen = !isFavoritesOpen;
	}

	const openMenu = () => {
		isMenuDrawerOpen = true;
	}

	const toggleMenuDrawer = () => {
		isMenuDrawerOpen = !isMenuDrawerOpen;
	}

	const toggleError = (e) => {
		showError = e.detail;
	}

	const fireToast = (e) => {
		showToast = e.detail;
		setTimeout(() => {
			showToast = '';
		}, 3000);
	}
</script>

<!-- <Header name={companyName} on:openCart={openCart} on:openFavorites={openFavorites} on:openMenu={openMenu} /> -->
<PageLayout>
	<main>
		<div class="container">
			<div>
				<h1 class="hide-show-titles">Select Brand</h1>
				<Brands {brands} {currentBrand} on:handleSetBrand={(e) => setBrandAndGet(e.detail)} />
            	<h1 style="text-align: center">View</h1>
				<select class="display-select" bind:value={$UserStore.displayFormat} on:change={setDisplayFormat}>
					<option value={DISPLAY_FORMAT.featured}>Spotlight</option>
					<option value={DISPLAY_FORMAT.grid}>Window Shopping</option>
					<option value={DISPLAY_FORMAT.list}>Deep Dive</option>
				</select>
				<h1 class="hide-show-titles">Filters</h1>
				<Filters {currentShoeSize} {currentGender} on:sizeChange={setShoeSize} on:genderChange={setGender} on:ageGroupChange={setAgeGroup} />
				
			</div>
			{#if isLoading}
				<div style="flex:2 1 0%; background-color: white; margin: 10px;">
					<LoadingState />
				</div>
			{:else if $UserStore.displayFormat === 'featured'}
				<div class="featured-container">
					<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
						<ShoeFeatured {currentShoe} {isLoading} {currentBrand} on:getNextShoe={nextShoe} on:getPrevShoe={prevShoe}/>
						<div class="row-container" style="flex-wrap: nowrap;">
							<CircleButton handleClick={() => prevShoe()} disabled={currentShoeIndex <= 0}>
								<i class="fas fa-chevron-left" />
							</CircleButton>
							<CircleButton handleClick={() => nextShoe()} disabled={currentShoeIndex >= shoes.length - 1}>
								<i class="fas fa-chevron-right" />
							</CircleButton>
						</div>
						{#if shoes[currentShoeIndex]?.title}
						<div class="row-container">
							<h1 style="text-align: center; margin-bottom: 0">{shoes[currentShoeIndex].title}</h1>
                        </div>
						<div class="row-container">
							<StarRating currentRating={currentShoe?.rating} />
                        </div>
						{/if}

						{#if showError}
							<h1 style="color: red;">Select A Size</h1>
						{/if}

						{#if shoes[currentShoeIndex]?.variants}
						<div class="row-container variants-container">
							<ShoeVariants shoe={currentShoe} {currentShoeVariant} on:setVariant={setVariant} on:toggleError={toggleError} />
                        </div>
						{/if}

						<div class="row-container actions-container">
							<ShoeActions
								shoe={currentShoe}
								{currentShoeVariant}
								on:toggleDetailsDrawer={toggleDetailsDrawer}
								on:toggleError={toggleError}
								on:fireToast={fireToast}
							/>
                        </div>
					</div>
				</div>
			{:else if $UserStore.displayFormat === 'grid'}
				<div style="flex:2 1 0%; background-color: white; margin: 10px; width: 100%;">
					<ShoeGrid {shoes} {currentPage} {totalPages} on:getNextPage={getNextPage} on:getPrevPage={getPrevPage} on:getShoeDetails={getShoeDetails} />
				</div>
			{:else if $UserStore.displayFormat === 'list'}
				<div style="flex:2 1 0%; background-color: white; margin: 10px 20px; width: 100%;">
					<ShoeList {shoes} {currentPage} {totalPages} on:getNextPage={getNextPage} on:getPrevPage={getPrevPage} on:getShoeDetails={getShoeDetails} />
				</div>
			{:else if shoes.length === 0 && !isLoading}
				<EmptyState />
			{/if}
		</div>
		
	</main>

	{#if isDetailsDrawerOpen}
		<ShoeDrawer shoe={currentShoe} {currentShoeVariant} on:toggleDetailsDrawer={toggleDetailsDrawer} {isDetailsDrawerOpen} on:setVariant={setVariant} on:fireToast={fireToast} />
	{/if}

	{#if isCartOpen}
		<CartDrawer {isCartOpen} {toggleCart} on:fireToast={fireToast} />
	{/if}

	{#if isFavoritesOpen}
		<FavoritesDrawer {isFavoritesOpen} {toggleFavorites} on:fireToast={fireToast} />
	{/if}

	{#if showToast}
		<Toast type={showToast?.type} message={toastMessage} />
	{/if}

	{#if isMenuDrawerOpen}
		<MenuDrawer {isMenuDrawerOpen} {toggleMenuDrawer} />
	{/if}
</PageLayout>
<!-- <Footer /> -->

<style>
	main {
		display: flex;
		flex-direction: column;
		margin-top: 40px;
        margin-bottom: 20px;
		width: 100%;
	}

	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: start;
		flex-wrap: nowrap;
	}

	.hide-show-titles {
		text-align: center;
	}

    .featured-container {
        flex:2 1 0%; background-color: white; margin: 10px; position: relative; top: 0px;
    }

    .row-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }

    .variants-container, 
    .actions-container {
        width: 50%;
    }

	.display-select {
        font-size: 20px;
        background-color: #a6f0ff;
        border: 2px solid #a6f0ff;
        font-weight: bold;
        padding: 10px;
        border-radius: 50px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        width: 100%;
        text-align: center;
		margin-bottom: 20px;
    }

	@media (max-width: 960px) {
		.container {
			flex-direction: column;
			align-items: center;
			padding: 0 10px;
		}

		.hide-show-titles {
			display: none;
		}

		main {
			margin-top: 20px;
		}

		.variants-container, 
        .actions-container {
            width: 75%;
        }
	}

    @media (max-width: 640px) {
        .variants-container, 
        .actions-container {
            width: 100%;
        }
    }
</style>
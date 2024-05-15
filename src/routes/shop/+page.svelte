<script lang="ts">
	import { onMount } from 'svelte';

	import Brands from '../../components/Brands.svelte';
	import ShoeFeatured from '../../components/ShoeFeatured.svelte';
	import Filters from '../../components/Filters.svelte';
	import ShoeGrid from '../../components/ShoeGrid.svelte';
	import ShoeList from '../../components/ShoeList.svelte';
	import PageLayout from '../../shared/PageLayout.svelte';
	import StarRating from '../../shared/StarRating.svelte';
	import CircleButton from '../../shared/CircleButton.svelte';
	import LoadingState from '../../shared/LoadingState.svelte';
	import EmptyState from '../../shared/EmptyState.svelte';
	import ShoeVariants from '../../shared/ShoeVariants.svelte';
	import ShoeActions from '../../shared/ShoeActions.svelte';

	import BRANDS from '../../constants/Brands';
	import DISPLAY_FORMAT from '../../constants/DisplayFormat';

	import CurrentShoeStore from '../../stores/CurrentShoeStore';
	import UserStore from '../../stores/UserStore';
	import ToastStore from '../../stores/ToastStore';

	import type { ShoeType } from '../../types/Shoe';
	import type { VariantType } from '../../types/Variant';

	let brands = BRANDS;
	let shoes: ShoeType[] = [];
	let originalShoes: ShoeType[] = [];
	let totalPages: number = 0;
	let currentPage: number = 1;
	let currentBrand = brands[0];
	let isLoading: boolean = false;
	let showError: boolean = false;

	let currentShoeSize: string = '';
	let currentGender: string = 'any';
	let currentAgeGroup: string = 'adults';

	$: currentShoe = <ShoeType>$CurrentShoeStore?.currentShoe;
	$: currentShoeIndex = $CurrentShoeStore?.currentShoeIndex || 0;
	$: currentShoeVariant = $CurrentShoeStore?.currentShoeVariant;

	$:console.log(shoes);

	// DOCUMENTATION - https://stockx.vlour.me/
	const getData = (brand: string, page: number, gender: string, age: string, size: string) => {
		isLoading = true;
		fetch(
			`https://api.stockx.vlour.me/search?query=${brand} ${age} ${gender} ${size ? `size ${size}` : ''} shoes&page=${page}`
		)
			.then((response) => response.json())
			.then((data) => {
				if (currentPage === 1) {
					originalShoes = [...data.hits];
					CurrentShoeStore.update((shoeInfo) => {
						return {
							...shoeInfo,
							currentShoeIndex: 0
						};
					});
				} else {
					originalShoes = [...originalShoes, ...data.hits];
				}

				totalPages = data.pages;

				originalShoes.forEach((shoe) => {
					shoe.rating = Math.floor(Math.random() * 6);
					shoe.variants.forEach((variant) => {
						variant.size = variant.size.replace(/[YCWK]/g, '');
					});
					shoe.variants.sort((a: VariantType, b: VariantType) => Number(a.size) - Number(b.size));
				});

				shoes = originalShoes;

				CurrentShoeStore.update((shoeInfo) => {
					return {
						...shoeInfo,
						// currentShoe: shoes?.[$CurrentShoeStore.currentShoeIndex],
						currentShoe: shoes?.[currentShoeIndex],
						currentShoeVariant: null
					};
				});

				isLoading = false;
			})
			.catch((err) => {
				console.error(err);
				isLoading = false;
			});
	};

	const setBrandAndGet = (brand: string) => {
		currentBrand = brand;
		currentPage = 1;
		getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
	};

	const getNextPage = () => {
		currentPage += 1;
		getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
	};

	const getPrevPage = () => {
		if (currentPage > 1) {
			currentPage -= 1;
		}

		getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
	};

	onMount(() => {
		setBrandAndGet(currentBrand);
	});

	const setVariant = (e: CustomEvent) => {
		CurrentShoeStore.update((shoeInfo) => {
			return {
				...shoeInfo,
				currentShoeVariant: e.detail
			};
		});
	};

	const nextShoe = () => {
		CurrentShoeStore.update((shoeInfo) => {
			return {
				...shoeInfo,
				currentShoe: shoes?.[currentShoeIndex + 1],
				currentShoeIndex: shoeInfo.currentShoeIndex + 1,
				currentShoeVariant: null
			};
		});

		if ($CurrentShoeStore.currentShoeIndex === shoes.length - 1) {
			currentPage += 1;
			getData(currentBrand, currentPage, currentGender, currentAgeGroup, currentShoeSize);
		}
	};

	const prevShoe = () => {
		CurrentShoeStore.update((shoeInfo) => {
			return {
				...shoeInfo,
				currentShoe: shoes?.[currentShoeIndex - 1],
				currentShoeIndex: shoeInfo.currentShoeIndex - 1,
				currentShoeVariant: null
			};
		});
	};

	const setGender = (e: CustomEvent) => {
		currentGender = e.detail;
		getData(currentBrand, 1, currentGender, currentAgeGroup, currentShoeSize);
	};

	const setAgeGroup = (e: CustomEvent) => {
		currentAgeGroup = e.detail;
		getData(currentBrand, 1, currentGender, currentAgeGroup, currentShoeSize);
	};

	const setShoeSize = (e: CustomEvent) => {
		currentShoeSize = e.detail;
		getData(currentBrand, 1, currentGender, currentAgeGroup, currentShoeSize);
	};

	const setDisplayFormat = (e: CustomEvent) => {
		UserStore.update((userInfo) => {
			return {
				...userInfo,
				displayFormat: (e.target as HTMLSelectElement).value
			};
		});
	};

	const toggleError = (e: CustomEvent) => {
		showError = e.detail;
	};
</script>

<PageLayout>
	<main>
		<div class="container">
			<div class="options-container">
				<h1 class="hide-show-titles">Select Brand</h1>
				<Brands {brands} {currentBrand} on:handleSetBrand={(e) => setBrandAndGet(e.detail)} />
				<h1 style="text-align: center">View</h1>
				<select
					class="display-select"
					bind:value={$UserStore.displayFormat}
					on:change={setDisplayFormat}
				>
					<option value={DISPLAY_FORMAT.featured}>Spotlight</option>
					<option value={DISPLAY_FORMAT.grid}>Window Shopping</option>
					<option value={DISPLAY_FORMAT.list}>Deep Dive</option>
				</select>
				<Filters
					{currentGender}
					on:genderChange={setGender}
					on:ageGroupChange={setAgeGroup}
				/>
			</div>
			{#if isLoading}
				<div style="flex:2 1 0%; background-color: white; margin: 10px;">
					<LoadingState />
				</div>
			{:else if $UserStore.displayFormat === 'featured'}
				<div class="featured-container">
					<div
						style="display: flex; flex-direction: column; align-items: center; justify-content: center;"
					>
						<ShoeFeatured
							{currentShoe}
							{isLoading}
							{currentBrand}
							on:getNextShoe={nextShoe}
							on:getPrevShoe={prevShoe}
						/>
						<div class="row-container" style="flex-wrap: nowrap;">
							<CircleButton handleClick={() => prevShoe()} disabled={currentShoeIndex <= 0}>
								<i class="fas fa-chevron-left" />
							</CircleButton>
							<CircleButton
								handleClick={() => nextShoe()}
								disabled={currentShoeIndex >= shoes.length - 1}
							>
								<i class="fas fa-chevron-right" />
							</CircleButton>
						</div>
						{#if shoes[currentShoeIndex]?.title}
							<div class="row-container">
								<h1 style="text-align: center; margin-bottom: 0">
									{shoes[currentShoeIndex].title}
								</h1>
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
								<ShoeVariants
									shoe={currentShoe}
									{currentShoeVariant}
									on:setVariant={setVariant}
									on:toggleError={toggleError}
								/>
							</div>
						{/if}

						<div class="row-container actions-container">
							<ShoeActions
								shoe={currentShoe}
								{currentShoeVariant}
								on:toggleError={toggleError}
							/>
						</div>
					</div>
				</div>
			{:else if $UserStore.displayFormat === 'grid'}
				<div class="view-container">
					<ShoeGrid
						{shoes}
						{currentPage}
						{totalPages}
						on:getNextPage={getNextPage}
						on:getPrevPage={getPrevPage}
					/>
				</div>
			{:else if $UserStore.displayFormat === 'list'}
				<div class="view-container">
					<ShoeList
						{shoes}
						{currentPage}
						{totalPages}
						on:getNextPage={getNextPage}
						on:getPrevPage={getPrevPage}
					/>
				</div>
			{:else if shoes.length === 0 && !isLoading}
				<EmptyState message="No shoe found." />
			{/if}
		</div>
	</main>
</PageLayout>

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
		flex: 2 1 0%;
		background-color: white;
		margin: 10px;
		position: relative;
		top: 0px;
	}

	.options-container {
		margin-right: 20px;
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

	.view-container {
		flex:2 1 0%;
		background-color: white;
		margin: 10px 20px;
		width: 100%;
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

	@media (max-width: 1024px) {
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

		.options-container {
			margin-right: 0;
		}
	}

	@media (max-width: 540px) {
		.variants-container,
		.actions-container {
			width: 100%;
		}
	}
</style>

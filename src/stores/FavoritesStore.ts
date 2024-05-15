import { writable } from 'svelte/store';
import type { FavoriteType } from '../types/Favorite';

const FavoritesStore = writable<FavoriteType[]>([]);

export default FavoritesStore;

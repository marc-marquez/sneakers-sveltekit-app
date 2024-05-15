import { writable } from 'svelte/store';
import DISPLAY_FORMAT from '../constants/DisplayFormat';
import type { UserType } from '../types/User';

const UserStore = writable<UserType>({
	displayFormat: DISPLAY_FORMAT.featured,
	isMenuOpen: false,
	isDetailsDrawerOpen: false,
	toast: []
});

export default UserStore;

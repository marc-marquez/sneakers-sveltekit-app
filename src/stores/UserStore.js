import { writable } from 'svelte/store';
import DISPLAY_FORMAT from '../constants/DisplayFormat';

const UserStore = writable({
	displayFormat: DISPLAY_FORMAT.featured,
	isMenuOpen: false,
	isDetailsDrawerOpen: false,
});

export default UserStore;

import { browser } from '$app/env';
import { writable } from 'svelte/store';

const storage = browser ? JSON.parse(window.localStorage['daek-arai-dee'] || {}) || {} : {};

function storeSettings() {
	if (browser) {
		window.localStorage['daek-arai-dee'] = JSON.stringify(storage);
	}
}

export const darkMode = writable<boolean>(storage.darkMode ?? false);

darkMode.subscribe((value) => {
	storage.darkMode = value;
	storeSettings();
});

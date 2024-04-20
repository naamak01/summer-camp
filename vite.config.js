// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				sports: resolve(__dirname, './src/Sports/index.html'),
				directory: resolve(__dirname, './src/Directory/index.html'),
				calendar: resolve(__dirname, './src/Calendar/index.html'),
				registration: resolve(__dirname, './src/Registration/index.html'),
			},
		},
	},
});

// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				calendar: resolve(__dirname, './src/Calendar/calendar.html'),
				directory: resolve(__dirname, './src/Directory/directory.html'),
				registration: resolve(
					__dirname,
					'./src/Registration/registration.html'
				),
				sports: resolve(__dirname, './src/Sports/sports.html'),
			},
		},
	},
});

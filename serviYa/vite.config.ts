import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: { port: 3000 },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

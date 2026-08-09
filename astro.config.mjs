import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://jamespleasehelp.com',
  integrations: [vue(), sentry(), spotlightjs()]
});

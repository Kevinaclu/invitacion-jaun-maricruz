// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import svelte from "@astrojs/svelte";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), db()],
  devToolbar: { enabled: false },
  adapter: vercel(),
  output: "server",
});

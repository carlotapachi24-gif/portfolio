import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://carlotapachi24-gif.github.io",
  base: "/portfolio/",
  envPrefix: "PUBLIC_",
  server: { port: 5200 },
  integrations: [tailwind(), mdx(), sitemap()],
});

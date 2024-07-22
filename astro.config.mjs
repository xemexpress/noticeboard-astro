import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import { onRequest } from "./src/middleware";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000,
    },
    integrations: [
        tailwind(),
        icon(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
        react(),
    ],
    site: process.env.SITE_URL || "http://localhost:3000",
    output: "server",
    adapter: netlify(),
    middleware: [onRequest],
});

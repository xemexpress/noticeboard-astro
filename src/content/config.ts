// config.ts
import { defineCollection, z } from "astro:content";

export const noticesCollection = defineCollection({
    type: "content",
    schema: ({ image }: any) =>
        z.object({
            image: image(),
            updatedAt: z.string().transform((str) => new Date(str)),
        }),
});

export const collections = {
    notices: noticesCollection,
};

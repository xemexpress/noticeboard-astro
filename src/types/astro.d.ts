// src/types/astro.d.ts
import { Locals } from "astro";

declare module "astro" {
    interface Locals {
        uid?: string;
    }
}

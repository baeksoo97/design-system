import { defineConfig, Options } from "tsup";
    
export default defineConfig((options: Options) => ({
    esbuildOptions(options) {
        options.banner = {
            js: '"use client"',
        }
    },
    ...options,
}));

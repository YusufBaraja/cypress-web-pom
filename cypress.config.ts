import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: false,
    scrollBehavior: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from 'starlight-theme-flexoki'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "robocup-docs",
	    plugins: [
			starlightThemeFlexoki({
				accentColor: "red",
			}),
		],

      customCss: [
        // Relative path to your custom CSS file
        "./src/fonts/font-face.css",
        "./src/styles/globals.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lohhaoyuan/robocup-docs",
        },
      ],
      sidebar: [
        {
          label: "About",
          autogenerate: { directory: "about" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Contributing",
          autogenerate: { directory: "contributing" },
        },
      ],
    }),
  ],
});

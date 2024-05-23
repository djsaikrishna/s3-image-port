import { defineConfig } from "vitepress";
import { en } from "./en";
import { zh } from "./zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "S3 Image Port",
  description: "A dashboard to manage your images in S3 and S3-like buckets",
  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
  ],
  locales: {
    root: {
      label: "English",
      ...en,
    },
    zh: {
      label: "简体中文",
      ...zh,
    },
  },
  cleanUrls: true,
  ignoreDeadLinks: [
    (url) => {
      return url.toLowerCase().includes("readme");
    },
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: "github", link: "https://github.com/yy4382/s3-image-port" },
    ],
  },
});

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Welcome",
      href: "/",
    },
    {
      label: "Utils",
      href: "/utils/json",
    },
  ],
  links: {
    github: "https://github.com/vercel/next.js",
  },
};

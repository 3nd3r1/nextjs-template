type SiteConfig = {
}
export const siteConfig = {
    // Basic info - UPDATE THESE
    name: "My App",
    shortName: "App",
    description: "A brief description of your application",
    url: "https://example.com",

    // Branding - UPDATE THESE
    themeColor: "#000000",
    backgroundColor: "#000000",
    locale: "en_US",
    language: "en",

    // Author info - UPDATE THESE
    author: {
        name: "Your Name",
        url: "https://yoursite.com",
    },

    // Social/SEO images - UPDATE THESE
    ogImage: "/og-image.png",
    twitterImage: "/twitter-image.png",

    // Keywords for SEO - UPDATE THESE
    keywords: ["keyword1", "keyword2", "keyword3"],

    // App category - UPDATE THIS
    category: "technology",
};

export type SiteConfig = typeof siteConfig;

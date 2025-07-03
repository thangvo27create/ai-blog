export const SITE = {
  website: "https://voidnest.vercel.app/", // replace this with your deployed domain
  author: "Theowyn Vo",
  profile: "https://www.instagram.com/wynsmz/",
  desc: "A strange little place on the web about smart tech and lazy genius.",
  title: "VoidNest",
  ogImage: "https://goalantis.com/wp-content/uploads/2025/04/Best-AI-Tools-for-Students-Boost-Study-Efficiency-and-Time-Management.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

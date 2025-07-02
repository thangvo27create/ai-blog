import type { Props } from "astro";

// 🧩 Import SVG icons từ thư mục: src/assets/icons/
import IconMail from "@/assets/icons/IconMail.svg";
import IconGithub from "@/assets/icons/IconGithub.svg";
import IconYoutube from "@/assets/icons/IconYoutube.svg";

// 🧭 Cấu trúc từng mạng xã hội (tên, link, icon)
interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

// 📌 Danh sách social bạn dùng
export const SOCIALS: Social[] = [
  {
    name: "Mail",
    href: "mailto:quocthangvontpt@gmail.com",
    linkTitle: "Send me an email",
    icon: IconMail,
  },
  {
    name: "GitHub",
    href: "https://github.com/thangvo27create",
    linkTitle: "Follow me on GitHub",
    icon: IconGithub,
  },
] as const;

import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [

  {
    name: "Mail",
    href: "mailto:quocthangvontpt@gmail.com",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;

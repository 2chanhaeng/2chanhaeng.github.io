import { Mail, NotebookText } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHub";
import { AboutListItemProps } from "./AboutListItem";

export const aboutListItems: AboutListItemProps[] = [
  {
    href: "mailto:2chanhaeng@gmail.com",
    text: "2chanhaeng@gmail.com",
    Icon: Mail,
  },
  {
    href: "https://github.com/2chanhaeng",
    text: "github.com/2chanhaeng",
    Icon: GitHubIcon,
  },
  {
    href: "https://chomu.dev/posts",
    text: "Blog chomu.dev",
    Icon: NotebookText,
  },
];

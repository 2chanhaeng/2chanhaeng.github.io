import { LucideIcon } from "lucide-react";
import Link from "next/link";

const ABOUT_LIST_ICON_SIZE = 24;

export interface AboutListItemProps {
  href: string;
  text: string;
  Icon: LucideIcon;
}

export default function AboutListItem({
  href,
  text,
  Icon,
}: AboutListItemProps) {
  return (
    <li className="flex items-center gap-2 line-clamp-1">
      <Icon size={ABOUT_LIST_ICON_SIZE} />
      <Link href={href} className="line-clamp-1">
        {text}
      </Link>
    </li>
  );
}

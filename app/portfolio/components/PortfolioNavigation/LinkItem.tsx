import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface LinkItemProps {
  href: string;
  className?: string;
  text: string;
}

export default function LinkItem({ href, className, text }: LinkItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`bg-bg ${className} ${navigationMenuTriggerStyle()}`}
        >
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

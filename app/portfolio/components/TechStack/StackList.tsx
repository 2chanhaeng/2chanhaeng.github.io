import { LucideIcon } from "lucide-react";
import StackBadge, { StackBadgeProps } from "@/components/StackBadge";

export interface StackListProps {
  name: string;
  Icon?: LucideIcon;
  badges: StackBadgeProps[];
}

export default function StackList({ name, Icon, badges }: StackListProps) {
  return (
    <>
      <h3 className="text-end">
        {Icon && <Icon />}
        {name}
      </h3>
      <ul className="flex flex-wrap gap-2 items-baseline break-normal even:col-span-2 lg:even:col-span-1">
        {badges.map((badge) => (
          <li key={StackBadge.name}>
            <StackBadge {...badge} />
          </li>
        ))}
      </ul>
    </>
  );
}

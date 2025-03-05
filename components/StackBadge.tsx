import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

export interface StackBadgeProps {
  name: string;
  Icon?: LucideIcon;
}

export default function StackBadge({ name, Icon }: StackBadgeProps) {
  return (
    <Badge variant="outline" className="text-fg border-fg/40 text-base">
      {Icon && <Icon size={24} />} {name}
    </Badge>
  );
}

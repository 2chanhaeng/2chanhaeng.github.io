import GitHubIcon from "@/components/icons/GitHub";
import StackBadge from "@/components/StackBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppWindow, LucideIcon } from "lucide-react";

export interface ProjectProps {
  name: string;
  introduction: string;
  descriptions: string[];
  techStacks: string[];
  gitUrl: string;
  deployUrl: string;
  startAt: string;
  endAt?: string;
  teams?: number;
}

const domainRegex =
  /(?=.{1,253}$)(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}/;

export default function Project({
  name,
  introduction,
  descriptions,
  techStacks,
  gitUrl,
  deployUrl,
  startAt,
  endAt,
  teams,
}: ProjectProps) {
  return (
    <Card className="hover:scale-105 transition-transform">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {startAt + (endAt ? ` - ${endAt}` : "")}
          {"  |  "}
          {teams ? `${teams}명의 팀원과 개발` : "1인 개발"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="font-bold text-xl">{introduction}</span>
        <ul className="list-disc list-inside">
          {descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1">
        <GitHubRepo url={gitUrl} />
        <Deploy url={deployUrl} />
        {
          <ul className="flex flex-wrap gap-2 items-baseline mt-2">
            {techStacks.map((stack) => (
              <li key={`${name}-${stack}`}>
                <StackBadge name={stack} />
              </li>
            ))}
          </ul>
        }
      </CardFooter>
    </Card>
  );
}

const GitHubRepo = ({ url }: { url: string }) =>
  ProjectLink({
    url,
    regex: /github\.com\/([^\/]+\/[^\/]+)/,
    regexIndex: 1,
    Icon: GitHubIcon,
  });

const Deploy = ProjectLink;

function ProjectLink({
  url,
  regex = domainRegex,
  regexIndex = 0,
  Icon = AppWindow,
}: {
  url: string;
  regex?: RegExp;
  regexIndex?: number;
  Icon?: LucideIcon;
}) {
  const repo = url.match(regex)?.[regexIndex];
  if (!repo) return null;
  return (
    <span className="flex items-center gap-2">
      <Icon size={18} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {repo}
      </a>
    </span>
  );
}

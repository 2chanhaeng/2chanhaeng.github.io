import Image from "next/image";
import Link from "next/link";
import { REPOSITORY_URL } from "@/lib/constants";

export default function Github() {
  return (
    <Link
      href={REPOSITORY_URL}
      className="ml-auto opacity-100 hover:opacity-20"
    >
      <Image
        src="/gh-icon.png"
        alt="GitHub"
        width={32}
        height={32}
        className="rounded-full bg-white hover:shadow-lg m-2"
      />
    </Link>
  );
}

import Container from "@/components/container";
import { REPOSITORY_URL } from "@/lib/constants";

type Props = {};

const Alert = ({}: Props) => {
  return (
    <div className="bg-neutral-50 border-neutral-200">
      <Container>
        <div className="py-2 text-center text-sm">
          The source code for this blog is{" "}
          <a
            href={REPOSITORY_URL}
            className="underline hover:text-blue-600 duration-200 transition-colors"
          >
            available on GitHub
          </a>
          .
        </div>
      </Container>
    </div>
  );
};

export default Alert;

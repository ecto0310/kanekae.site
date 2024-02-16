"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { TwitterShareButton } from "react-share";

const Foter = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <footer className="mt-3">
      <div>
        <TwitterShareButton
          title={"金返して"}
          url={
            params.get("message")
              ? `https://kanekae.site${pathname}?message=${params.get("message")}`
              : `https://kanekae.site${pathname}`
          }
          hashtags={["金返して"]}
          className="mx-2"
        >
          <FontAwesomeIcon icon={faTwitter} size={"2xl"} />
        </TwitterShareButton>
        <Link
          href="https://github.com/ecto0310/kanekae.site"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faGithub} size={"2xl"} />
        </Link>
      </div>
    </footer>
  );
};

export default Foter;

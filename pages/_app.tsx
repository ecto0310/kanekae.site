import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Image from "next/image";
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { TwitterShareButton, TwitterIcon } from 'react-share'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>kanekae.site</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ecto0310" />
        <meta property="og:url" content="https://imanona.si/" />
        <meta property="og:title" content="金返して" />
        <meta property="og:description" content="金返して" />
        <meta property="og:image" content="https://kanekae.site/kanekaesite.png" />
      </Head>
      <Container className="text-center">
        <div className='m-5 fw-bold display-1'>金返して</div>
        <Component {...pageProps} />
        <footer className="mt-3">
          <div>
            <TwitterShareButton title={"金返して"} url={"https://kanekae.site" + router.asPath} hashtags={["金返して"]} className="mx-2">
              <FontAwesomeIcon icon={faTwitter} size={"2xl"} />
            </TwitterShareButton>
            <Link href="https://github.com/ecto0310/kanekae.site" target="_blank" rel="noreferrer" className="mx-2">
              <FontAwesomeIcon icon={faGithub} size={"2xl"} />
            </Link>
          </div>
        </footer>
      </Container>
    </>
  );
}

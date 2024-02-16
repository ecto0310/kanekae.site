import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Body from "./body";

export const metadata: Metadata = {
  title: "kanekae.site",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "金返して",
    description: "金返して",
    url: "https://imanona.si/",
    images: {
      url: "https://kanekae.site/kanekaesite.png",
    },
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <Body>{children}</Body>
      </body>
    </html>
  );
};

export default RootLayout;

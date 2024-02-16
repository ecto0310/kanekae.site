"use client";

import Footer from "@/components/footer";
import { ReactNode, Suspense } from "react";
import { Container } from "react-bootstrap";

interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <Container className="text-center">
      <div className="m-5 fw-bold display-1">金返して</div>
      <Suspense>{children}</Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </Container>
  );
};

export default Body;

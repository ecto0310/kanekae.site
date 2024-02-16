"use client";

import Button from "react-bootstrap/Button";
import Link from "next/link";
import QRCode from "react-qr-code";
import { useSearchParams } from "next/navigation";

const Message = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") ?? "";

  const urlReg = new RegExp(/^https?:\/\/[\w/:%#$&?()~.=+-]+$/);

  if (urlReg.test(message)) {
    return (
      <>
        <Link href={message}>
          <Button variant={"primary"}>リンク</Button>
        </Link>
        <div className="m-5">
          <QRCode value={message} />
        </div>
      </>
    );
  }

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default Message;

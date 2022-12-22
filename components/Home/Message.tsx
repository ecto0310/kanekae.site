import { useRouter } from "next/router";
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import QRCode from "react-qr-code";

const Message = () => {
    const router = useRouter();


    const urlReg = new RegExp(/^https?:\/\/[\w/:%#$&?()~.=+-]+$/);

    const message = Array.isArray(router.query.message) ?
        router.query.message[0] :
        router.query.message || "";

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

}

export default Message;

import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import QRCode from "react-qr-code";

export const Claim: React.FC = () => {
    const [searchParams] = useSearchParams();
    const text = searchParams.get("text")!!;
    const urlReg = new RegExp(/^https?:\/\/[\w/:%#$&?()~.=+-]+$/);

    return (
        <div className="claim">
            {
                text ?
                    <div>
                        <div>
                            {
                                urlReg.test(text) ?
                                    <a href={text}>
                                        <Button variant="primary">リンク</Button>
                                    </a> :
                                    text
                            }
                        </div>
                        <div className="m-5"><QRCode value={text} /></div>
                    </div> :
                    <div>
                        <Link to="/create">
                            <Button variant="primary">QR付きページを作成する</Button>
                        </Link>
                    </div>
            }
        </div>
    );
}

export default Claim;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

export const Create: React.FC = () => {
    const [qrText, setQrText] = useState("");

    return (
        <div className="create">
            URLを入力した場合QRコードとリンクが表示されます。
            <div>
                <Form.Control
                    type='text' value={qrText} onChange={e => setQrText(e.target.value)}
                />
            </div>
            <div>
                <a href={"/?text=" + encodeURIComponent(qrText)}>
                    <Button variant="primary">メッセージ付きページへ移動</Button>
                </a>
            </div>
        </div>
    );
}

export default Create;

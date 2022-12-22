import Message from "../../components/Home/Message";
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function CreatePage() {
  const router = useRouter();

  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <Form.Control type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button variant="primary" onClick={() => router.push({ pathname: "/", query: { message: message } })}>メッセージ付きページへ移動</Button>
      </div>
    </>
  )
}

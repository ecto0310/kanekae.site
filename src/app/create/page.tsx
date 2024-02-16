"use client";

import Message from "@/components/message";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Page = () => {
  const [message, setMessage] = useState("");

  return (
    <main>
      <div>
        <Message />
      </div>
      <div>
        <Form.Control
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <Button variant="primary" href={`/?message=${message}`}>
          メッセージ付きページへ移動
        </Button>
      </div>
    </main>
  );
};

export default Page;

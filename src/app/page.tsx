import Message from "@/components/message";
import { Button } from "react-bootstrap";

const Page = () => {
  return (
    <main>
      <div>
        <Message />
      </div>
      <div>
        <Button variant="primary" href="/create">
          メッセージ付きページを作成する
        </Button>
      </div>
    </main>
  );
};

export default Page;

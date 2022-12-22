import Message from "../components/Home/Message";
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";


export default function IndexPage() {
  const router = useRouter();

  return (
    <>
      <div>
        <Message />
      </div>
      <div>
        <Button variant="primary" onClick={() => router.push({ pathname: "/create" })}>メッセージ付きページを作成する</Button>
      </div>
    </>
  )
}

import { User } from "../models/User";

export default function Message({
  text,
  sender,
}: {
  text: string;
  sender: User;
}) {
  return (
    <>
      <div>{sender.name}</div> <div>{text}</div>
    </>
  );
}

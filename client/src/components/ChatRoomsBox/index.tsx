import { ChatProps } from "../../types";

type ChatRoomsBoxProps = {
  chats: ChatProps[];
  setSelectedChat: (chat: ChatProps) => void;
  selectedChatId: string;
};

export default function ChatRoomsBox({
  chats,
  setSelectedChat,
  selectedChatId,
}: ChatRoomsBoxProps) {
  return <></>;
}
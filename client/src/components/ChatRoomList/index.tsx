import { Box, Chip, Input, List, Sheet, Stack } from "@mui/joy";
import { ChatProps } from "../../types";
import styles from "./styles";
import ChatRoomListItem from "../ChatRoomListItem";


type ChatRoomListProps = {
  chats: ChatProps[];
  setSelectedChat: (chat: ChatProps) => void;
  selectedChatId: string;
};

export default function ChatRoomList({
  chats,
  setSelectedChat,
  selectedChatId,
}: ChatRoomListProps) {
  return (
    <Sheet sx={styles.chatRoomBox}>
      <Stack direction="row" alignItems="center" p={2} pb={1.5}>
        ChatRooms <Chip>40</Chip>
      </Stack>
      <Box sx={{ px: 2, pb: 1.5 }}>
        <Input />
      </Box>
      <List
        sx={{
          py: 0,
          '--ListItem-paddingY': '0.75rem',
          '--ListItem-paddingX': '1rem',
        }}
      >
        {chats.map((chat) => (
          <ChatRoomListItem
            key={chat.id}
            {...chat}
            setSelectedChat={setSelectedChat}
            selectedChatId={selectedChatId}
          />
        ))}
      </List>
    </Sheet>
  );
}
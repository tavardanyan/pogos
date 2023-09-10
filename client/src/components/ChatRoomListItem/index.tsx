import { Fragment } from "react";
import { Box, ListDivider, ListItem, ListItemButton, ListItemButtonProps, Stack } from "@mui/joy";
import CircleIcon from '@mui/icons-material/Circle';

import AvatarStatus from "../AvatarStatus";

import styles from "./styles";

import { ChatProps, MessageProps, UserProps } from "../../types";

type ChatRoomListItemProps = ListItemButtonProps & {
  id: string;
  unread?: boolean;
  typing?: string | null;
  users: UserProps[];
  messages: MessageProps[];
  selectedChatId?: string;
  setSelectedChat: (chat: ChatProps) => void;
};

export default function ChatRoomListItem({
  id,
  users,
  messages,
  selectedChatId,
  setSelectedChat,
}: ChatRoomListItemProps) {
  const selected = selectedChatId === id;
  return (
    <Fragment>
      <ListItem>
        <ListItemButton
          onClick={() => setSelectedChat({ id, users, messages })}
          selected={selected}
          color="neutral"
          sx={styles.listItemBtn}
        >
          <Stack direction="row" spacing={1.5}>
            <AvatarStatus online={users[0].online} src={users[0].avatar || 'https://api.dicebear.com/7.x/personas/svg?seed=' + users[0].username} />
            <Box sx={{ flex: 1 }}>
              {users[0].name}
            </Box>
            <Box>
              5 mins ago 
              {messages[0].unread && (<CircleIcon sx={{ fontSize: 10 }} color="success" />)}
            </Box>
          </Stack>
          {messages[0].content}
        </ListItemButton>
      </ListItem>
      <ListDivider sx={{ margin: 0 }} />
    </Fragment>
  );
}
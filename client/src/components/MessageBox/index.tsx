import { Box, Sheet, Stack } from "@mui/joy";
import { ChatProps, MessageProps } from "../../types";
import styles from "./styles";
import AvatarStatus from "../AvatarStatus";
import { useEffect, useState } from "react";
import MessageInput from "../MessageInput";
import MessageItem from "../MessageItem";

type MessagesPaneProps = {
  chat: ChatProps;
};

export default function MessagesBox({ chat }: MessagesPaneProps) {
  const [chatMessages, setChatMessages] = useState(chat.messages);
  const [textAreaValue, setTextAreaValue] = useState('');

  useEffect(() => {
    setChatMessages(chat.messages);
  }, [chat.messages]);
  return (
    <Sheet
      sx={styles.messageBoxContainer}
    >
      {/* <MessagesPaneHeader sender={chat.sender} /> */}

      <Box
        sx={styles.messageBox}
      >
        <Stack spacing={2} justifyContent="flex-end">
          {chatMessages.map((message: MessageProps, index: number) => {
            const isYou = message.sender === 'You';
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                flexDirection={isYou ? 'row-reverse' : 'row'}
              >
                {message.sender !== 'You' && (
                  <AvatarStatus
                    online={message.sender.online}
                    src={message.sender.avatar}
                  />
                )}
                <MessageItem variant={isYou ? 'sent' : 'received'} {...message} />
              </Stack>
            );
          })}
        </Stack>
      </Box>

      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => {
          const newId = chatMessages.length + 1;
          const newIdString = newId.toString();
          setChatMessages([
            ...chatMessages,
            {
              id: newIdString,
              sender: 'You',
              content: textAreaValue,
              timestamp: 'Just now',
            },
          ]);
        }}
      />
    </Sheet>
  );
}
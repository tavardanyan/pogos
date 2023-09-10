import { useState } from 'react';
import { Sheet } from '@mui/joy';

import ChatRoomsBox from '../ChatRoomsBox';
import MessagesBox from '../MessageBox';

import styles from './styles';

import { ChatProps } from '../../types';

const mockData: {
  chats: ChatProps[]
} = {
  chats: [
    {
      id: '1',
      users: [{
        name: 'John',
        username: '@jonni',
        avatar: '/client/images/1.jpg',
        online: true,
        typing: null,
      }],
      messages: [
        {
          id: '1',
          content: 'lorem ipsum dolor sit amet, consectet',
          timestamp: '16545315465146',
          sender: 'You'
        }
      ]
    }
  ]
}

export default function ChatBox() {
  const [selectedChat, setSelectedChat] = useState<ChatProps>(mockData.chats[0]);

  return (
    <Sheet sx={styles.messageBox}>
      <Sheet sx={styles.roomsBox}>
        <ChatRoomsBox
          chats={mockData.chats}
          selectedChatId={selectedChat.id}
          setSelectedChat={setSelectedChat}
        />
      </Sheet>
      <MessagesBox chat={selectedChat} />
    </Sheet>
  );
}
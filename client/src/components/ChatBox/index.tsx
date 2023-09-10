import { Sheet } from '@mui/joy';

import ChatRoomsBox from '../ChatRoomsBox';
import MessagesBox from '../MessageBox';

import styles from './styles';

export default function ChatBox() {

  return (
    <Sheet sx={styles.messageBox}>
    <Sheet sx={styles.roomsBox}>
      <ChatRoomsBox />
    </Sheet>
    <MessagesBox />
  </Sheet>
  );
}
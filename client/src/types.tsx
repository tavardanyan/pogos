export type UserProps = {
  name: string;
  username: string;
  avatar: string;
  online: boolean;
  typing: string | null;
};

export type MessageProps = {
  id: string;
  content: string;
  timestamp: string;
  unread?: boolean;
  sender: UserProps | 'You';
};

export type ChatProps = {
  id: string;
  users: UserProps[];
  messages: MessageProps[];
};

import { Avatar, AvatarProps, Badge } from "@mui/joy";

type AvatarStatusProps = AvatarProps & {
  online?: boolean;
};

export default function AvatarStatus({ online = false, ...props }: AvatarStatusProps) {
  return (
    <div>
      <Badge
        color={online ? 'success' : 'neutral'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeInset="6px 6px"
      >
        <Avatar {...props} />
      </Badge>
    </div>
  );
}
import { Box, Sheet, Stack, Typography } from "@mui/joy";
import { MessageProps } from "../../types";

type MessageItemProps = MessageProps & {
  variant: 'sent' | 'received';
};

export default function MessageItem({
  content,
  variant,
  timestamp,
  sender,
}: MessageItemProps) {
  const isSent = variant === 'sent';
  return (
    <Box sx={{ maxWidth: '80%', minWidth: 'auto' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 0.25 }}
      >
        <Typography level="body-xs">
          {sender === 'You' ? sender : sender.name}
        </Typography>
        <Typography level="body-xs">{timestamp}</Typography>
      </Stack>
        <Box sx={{ position: 'relative' }}>
          <Sheet
            color={isSent ? 'primary' : 'neutral'}
            variant={isSent ? 'solid' : 'soft'}
            sx={{
              px: 1.25,
              py: 1.25,
              borderRadius: 'lg',
              borderTopRightRadius: isSent ? 0 : 'lg',
              borderTopLeftRadius: isSent ? 'lg' : 0,
            }}
          >
            {content}
          </Sheet>
        </Box>
    </Box>
  );
}
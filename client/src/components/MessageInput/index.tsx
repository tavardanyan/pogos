import { Box, Button, FormControl, Stack, Textarea } from "@mui/joy";
import { useRef } from "react";

export type MessageInputProps = {
  textAreaValue: string;
  setTextAreaValue: (value: string) => void;
  onSubmit: () => void;
};

export default function MessageInput({
  textAreaValue,
  setTextAreaValue,
  onSubmit,
}: MessageInputProps) {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (textAreaValue.trim() !== '') {
      onSubmit();
      setTextAreaValue('');
    }
  };
  return (
    <Box sx={{ px: 2, pb: 3 }}>
      <FormControl>
        <Textarea
          placeholder="press CTRL+ENTER to send message"
          aria-label="Message"
          ref={textAreaRef}
          onChange={(e) => setTextAreaValue(e.target.value)}
          value={textAreaValue}
          minRows={2}
          maxRows={10}
          endDecorator={
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              flexGrow={1}
              minHeight={40}
            >
              <Button onClick={handleClick}>Send</Button>
            </Stack>
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
        />
      </FormControl>
    </Box>
  );
}
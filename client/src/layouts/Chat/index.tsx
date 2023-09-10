import { ReactElement } from "react";

import { CssVarsProvider } from '@mui/joy/styles';
import { Box, CssBaseline, GlobalStyles } from "@mui/joy";

import Header from '../../components/Header';
import ChatBox from '../../components/ChatBox';

interface ChatLayoutProps {
  rooms: string[],
}

export default function ChatLayout({ rooms }: ChatLayoutProps): ReactElement {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles
        styles={(theme) => ({
          '[data-feather], .feather': {
            color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
            margin: 'var(--Icon-margin)',
            fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
            width: '1em',
            height: '1em',
          },
        })}
      />
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <ChatBox />
        </Box>
      </Box>
    </CssVarsProvider>
  )
}
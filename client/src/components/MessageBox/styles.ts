const styles = {
  messageBoxContainer: {
    height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
    display: 'flex',
    flexDirection: 'column',
  },
  messageBox: {
    display: 'flex',
    flex: 1,
    minHeight: 0,
    px: 2,
    py: 2.5,
    overflowY: 'scroll',
    flexDirection: 'column-reverse',
  }
};

export default styles;

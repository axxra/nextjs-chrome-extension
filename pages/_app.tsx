import { CssVarsProvider, CssBaseline, Box } from '@mui/joy';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssVarsProvider defaultMode='dark'>
        <CssBaseline />
        <Box sx={{ height: "600px", width: "400px" }}>
          <Component {...pageProps} />
        </Box>
      </CssVarsProvider>
      <style jsx global>{`
      *::-webkit-scrollbar {
        background-color: #0e0e10;
        width: 12px;
      }

      *::-webkit-scrollbar-thumb {
        background-color: #6b6b6b;
        border-radius: 8px;
        border: 3px solid #0e0e10";
      }

      *::-webkit-scrollbar-thumb:hover {
        background-color: #959595;
      }
    `}</style>
    </>
  )
}

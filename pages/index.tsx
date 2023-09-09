import { Box, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', p: 4 }}>
      <Typography level="body-lg">
        Hello World, This is a Next.Js Chrome Browser Extension
      </Typography>
    </Box>
  )
}

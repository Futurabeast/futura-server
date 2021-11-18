import {
  Paper,
  Typography,
  Container,
  MenuItem,
  Box,
  Button,
  Grid,
  Select,
} from '@mui/material';

export function NewDevice(props: any) {
  return (
    <Container>
      <Grid mt={2}>
        <Grid item>
          <Paper elevation={2}>
            <Typography variant="h5" gutterBottom component="div">
              Create a new device
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
              p={2}
            >
              <Select label="Device Type" value="FuturaFaceTracker">
                <MenuItem value="FuturaFaceTracker">
                  Futura Face Tracker
                </MenuItem>
                <MenuItem value="FuturaControllers">
                  Futura Controllers
                </MenuItem>
              </Select>
              <Select label="Usb device" />
              <Button>Upload</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
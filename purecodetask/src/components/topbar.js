import {
  AppBar,
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Select,
  Stack,
} from "@mui/material";
import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";

const Topbar = () => {
  return (
    // <AppBar color="transparent" sx={{height:"10vh"}}>

    <Stack
      display="flex"
      spacing={1}
      justifyContent="flex-end"
      direction="row"
      m={1}
    >
      <IconButton variant="outlined">
        <BoltIcon variant="outlined"></BoltIcon>
      </IconButton>

      <FormControl>
        <InputLabel>Channel-PLN</InputLabel>
        <Select label="Channel-PLN"></Select>
      </FormControl>
      <IconButton>
        <Grid display="flex" alignItems="center">
          <Avatar>AD</Avatar>
          <Button>admin@example.com</Button>
        </Grid>
      </IconButton>
    </Stack>
    // </AppBar>
  );
};

export default Topbar;

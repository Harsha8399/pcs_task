import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, CardMedia, Grid, Icon, IconButton, Stack } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { sizing } from "@mui/system";
import { minWidth } from "@mui/system";




export default function BasicCard() {
  return (
    <>
    <Grid container
        spacing={8}
      direction="row"
      display="flex"
      p={1}
      sx={{ width:"68rem",ml:"5rem"}}
    >
    <Grid item>
      <Card
        sx={{
          display: "flex",
          width: "20rem",
          height: "8rem",
          alignItems: "center",
        }}
        // justifyContent="space-between"
      >
        <Box sx={{ display: "flex", flexDirection: "column" ,m:2}} p={1} height="100%">
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Sales
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Today
            </Typography>
            <Typography display="flex" justifyContent="flex-end">PLN 0.00</Typography>
          </CardContent>
        </Box>
        <Icon display="flex" alignItems="flex-end">
          <TrendingUpIcon />
        </Icon>
      </Card>
      </Grid>
      <Grid item>
      <Card
        sx={{
          display: "flex",
          width: "20rem",
          height: "8rem",
          alignItems: "center",
        }}
        
      >
        <Box sx={{ display: "flex", flexDirection: "column" }} p={1}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Orders
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Today
            </Typography>
            <Typography>0</Typography>
          </CardContent>
        </Box>
        <Icon>
          <TrendingUpIcon />
        </Icon>
      </Card>
      </Grid>
    </Grid>
    </>
  );
}

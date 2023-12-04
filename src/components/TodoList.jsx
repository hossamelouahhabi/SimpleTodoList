import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Grid, TextField, ToggleButton, createTheme } from "@mui/material";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import TodoTask from "./TodoTask";


export default function TodoList() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <Container maxWidth="sm" >

      <Card className="main-card" sx={{ minWidth: 275 }}>


        <CardContent>
          <Typography sx={{ mb: 1 }} variant="h2" component="div">
            Todo List
          </Typography>

          <Divider />

          {/* //? Filter Buttons*/}
          <ToggleButtonGroup
          // value={alignment}
          sx={{marginTop: 4}}
          exclusive
          // onChange={handleAlignment}
          aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              All
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Done
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              UnDone
            </ToggleButton>
          </ToggleButtonGroup>
          {/* //? Filter Buttons*/}


          {/* //! TodoTask component */}
          <TodoTask />
          {/* //! TodoTask component */}
        
      
          {/*// ? Input And Add Button */}
          <Grid container sx={{marginTop:  "20px"}}>
          <Grid
              xs={8}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField sx={{width: "95%"}} id="outlined-basic" label="Task Name" variant="outlined" />
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              >
              <Button sx={{width: "100%", height: '90%'}} variant="contained" size="lg">
                Add Task
              </Button>
            </Grid>
          </Grid>
          {/*// ? Input And Add Button */}


        </CardContent>
      </Card>

    </Container>
  );
}

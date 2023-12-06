import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Divider, Grid, TextField, ToggleButton,} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { v4 as Id } from "uuid";


import TodoTask from "./TodoTask";
import { useState, useContext, useEffect} from "react";
import { TasksContext } from "../contexts/TasksContext";


export default function TodoList() {

  const {tasksData, setTasksData} = useContext(TasksContext)
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem("tasksData"))
    setTasksData(storageTasks)
  }, [])

  const handleAddTaskBtn = () => {
    const newTaskdata = {
      id: Id(),
      title: inputValue,
      details: "",  
      isCompleted: false,
    }

    if(inputValue !== ""){
      setTasksData([...tasksData, newTaskdata])
    }

    localStorage.setItem("tasksData", JSON.stringify([...tasksData, newTaskdata]))

    setInputValue("")
  }

  const todoTask = tasksData.map((task) => {
    return <TodoTask key={task.id} task={task} />;
  });

  return (
    <Container maxWidth="sm">
      <Card className="main-card" sx={{ minWidth: 275, minHeight: "90vh" }}>
        <CardContent>
          <Typography sx={{ mb: 1 }} variant="h2" component="div">
            Todo List
          </Typography>

          <Divider />

          {/* //? Filter Buttons*/}
          <ToggleButtonGroup
            // value={alignment}
            sx={{ marginTop: 4, marginBottom: 2 }}
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
          {/* //?======Filter Buttons======*/}

          {/*// ? Input And Add Button */}
          <Grid container sx={{ marginTop: "20px", marginBottom: "20px" }}>
            <Grid
              item
              xs={8}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                sx={{ width: "95%" }}
                id="outlined-basic"
                label="Task Name"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                sx={{ width: "100%", height: "90%" }}
                variant="contained"
                size="lg"
                onClick={handleAddTaskBtn}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
          {/*//?======Input And Add Button======*/}

          {/* //! TodoTask component */}
          {todoTask}
          {/* //!======TodoTask component======*/}

        </CardContent>
      </Card>
    </Container>
  );
}

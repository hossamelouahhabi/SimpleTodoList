import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import TodoList from "./components/TodoList";
import { TasksContext } from "./contexts/TasksContext";
import { v4 as Id } from "uuid";
import { useState } from "react";


const theme = createTheme({
  typography: {
    fontFamily: "RubikBold",
  },
});

const TasksData = [
  {
    id: Id(),
    title: "Read A Book",
    details: "reading david goggins book",
    isCompleted: false,
  },
];

function App() {
  const [tasksData, setTasksData] = useState(TasksData)

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          backgroundColor: "#eeee",
        }}
      >
       <TasksContext.Provider value={{tasksData, setTasksData}}>
          <TodoList />
        </TasksContext.Provider> 
      </div>
    </ThemeProvider>
  );
}

export default App;

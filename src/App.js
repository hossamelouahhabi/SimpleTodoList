import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import TodoList from "./components/TodoList";

const theme = createTheme({
  typography: {
    fontFamily: "RubikBold",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          // backgroundColor: "#e0f2f1",
        }}
      >
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;

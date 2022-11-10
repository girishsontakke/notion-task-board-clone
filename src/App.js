import TaskContextProvider from "context/TaskContextProvider";
import TaskFormContextProvider from "context/TaskFormContextProvider";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <TaskFormContextProvider>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </TaskFormContextProvider>
  );
}

export default App;

import TaskContextProvider from "context/TaskContextProvider";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;

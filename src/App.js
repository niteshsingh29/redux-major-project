import "./App.css";
import Navbar from "./components/Navbar";
import AddStudents from "./components/AddStudents";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <AddStudents />
    </>
  );
}

export default App;

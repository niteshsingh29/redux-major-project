import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AddStudents from "./components/studentsList/AddStudents";
// import Landingpage from "./components/landingpage/Landingpage";
// import Login from "./components/login/Login";
import StudentsList from "./components/studentsList/StudentsList";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import TypingAnimation from "./components/landingpage/TypingAnimation";
import AddStudentsMark from "./components/studentsList/AddStudentsMark"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/AddStudents" element={<AddStudents />} />
          <Route path="/AddMarks" element={<AddStudentsMark />} />

          <Route path="/StudentsList" element={<StudentsList />} />
          <Route path="/Home" element={<TypingAnimation />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AddStudents from "./components/studentsList/AddStudents";
import Login from "./components/Login/Login";
import StudentsList from "./components/studentsList/StudentsList";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import TypingAnimation from "./components/landingpage/TypingAnimation";
import AddStudentsMark from "./components/studentsList/AddStudentsMark";
import { useState } from "react";
import StudentmarkListdata from "./components/studentsList/StudentmarkListdata";
function App() {
  const [isAuthenticated, setAuthenticated] = useState("true");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {isAuthenticated && <Login setAuthenticated={setAuthenticated} />}
        <Routes>
          <Route exact path="/AddStudents" element={<AddStudents />} />
          <Route exact path="/AddStudents/:id" element={<AddStudents />} />
          <Route path="/AddMarks" element={<AddStudentsMark />} />
          <Route path="/Home" element={<TypingAnimation />} />

          <Route path="/StudentsList" element={<StudentsList />} />
          <Route path="/marks" element={<StudentmarkListdata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

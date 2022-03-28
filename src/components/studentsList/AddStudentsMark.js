import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addStudentMarks } from "../../StateManagement/reducer2";

const AddStudentsMark = () => {
  const [english, setEnglish] = useState("");
  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");
  const [selectedValue, setSelectedValue] = useState("1");
  console.log(selectedValue);

  const state__1 = useSelector((state) => state.students.value);
  console.log(state__1);
  const state__2 = useSelector((state) => state.StudentMarks.value);
  console.log(state__2);
  const dispatch__marks = useDispatch();
  return (
    <>
      <div className="container " style={{ marginTop: "150px" }}>
        <FormControl>
          <h1>Fill Student Marks</h1>
          <FormLabel htmlFor="country">Students</FormLabel>
          <Select
            id="country"
            placeholder="Select Student"
            value={state__1.find((obj) => obj.id === selectedValue)}
            onChange={(e) => setSelectedValue(e.target.value)}
      
          >
                {state__1.map((students) => (
              <option>
                {students.first__Name + " " + students.last__Name}
              </option>
            ))}
          </Select>
          
          <div
            className="inputs mt-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            English
            <input
              type="number"
              name="marks"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              className="my-2"
            />
            Maths
            <input
              type="number"
              name="marks"
              value={math}
              onChange={(e) => setMath(e.target.value)}
              className="my-2"
            />
            Physics
            <input
              type="number"
              name="marks"
              value={physics}
              onChange={(e) => setPhysics(e.target.value)}
              className="my-2"
            />
          </div>
          <button
            className="btn btn-dark mt-3"
            onClick={() => {
              dispatch__marks(
                addStudentMarks({
                  id: state__2[state__2.length - 1].id + 1,
                  English: english,
                  Math: math,
                  Physics: physics,
                  Name: selectedValue,
                })
              );
            }}
          >
            Add Marks
          </button>
        </FormControl>
      </div>
    </>
  );
};
export default AddStudentsMark;

import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {addStudentMarks} from "../../StateManagement/reducer2"

const AddStudentsMark = () => {
  const [english, setEnglish] = useState("");
  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");

  const state__1 = useSelector((state) => state.students.value);
  console.log(state__1);
  const state__2 = useSelector((state) => state.StudentMarks.value)
  console.log(state__2);
  const dispatch__marks = useDispatch();
  return (
    <>
      <div className="container " style={{ marginTop: "150px" }}>
        <FormControl>
          <FormLabel htmlFor="country">Students</FormLabel>
          <Select id="country" placeholder="Select Student">
            {state__1.map((students) => (
              <option>
                {students.first__Name + " " + students.last__Name}
              </option>
            ))}
          </Select>
          <div
            className="inputs"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="number"
              name="marks"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              className="my-2"
            />
            <input
              type="number"
              name="marks"
              value={math}
              onChange={(e) => setMath(e.target.value)}
              className="my-2"
            />
            <input
              type="number"
              name="marks"
              value={physics}
              onChange={(e) => setPhysics(e.target.value)}
              className="my-2"
            />
          </div>
          <button
            className="btn btn-dark"
            onClick={() => {
              dispatch__marks(
                addStudentMarks({
                  id: state__2[state__2.length - 1].id + 1,
                  English: english,
                  Math: math,
                  Physics: physics,
                })    
              );
            }}
          ></button>
        </FormControl>
      </div>
    </>
  );
};
export default AddStudentsMark;

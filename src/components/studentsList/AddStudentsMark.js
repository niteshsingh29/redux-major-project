import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const AddStudentsMark = () => {
  const state__1 = useSelector((state) => state.students.value);
  console.log(state__1);
  return (
    <>
      <div className="container mt-5">
        <FormControl>
          <FormLabel htmlFor="country">Students</FormLabel>
          <Select id="country" placeholder="Select Student">
            {state__1.map((students) => (
              <option>
                {students.first__Name + " " + students.last__Name}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};
export default AddStudentsMark;

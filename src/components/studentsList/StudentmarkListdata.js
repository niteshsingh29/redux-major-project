import { useSelector } from "react-redux";
const StudentmarkListdata = () => {
  const student__Marks = useSelector((state) => state.StudentMarks.value);
  console.log(student__Marks);
  return (
    <>
      <div className="container" style={{marginTop:'150px'}}>
        <div className="py-4">
          <h1>Marks of Students</h1>
          <table class="table border shadow mt-4">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Sr. No</th>
                <th scope="col">Name</th>
                <th scope="col">English</th>
                <th scope="col">MAths</th>
                <th scope="col">Physics</th>
              </tr>
            </thead>
            <tbody>
              {student__Marks.map((student, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{student.Name}</td>
                  <td>{student.English}</td>
                  <td>{student.Math}</td>
                  <td>{student.Physics}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button class="btn btn-danger" onClick={(e) => handleDelete(users)}>
          Delete
        </button> */}
        </div>
      </div>
    </>
  );
};
export default StudentmarkListdata;

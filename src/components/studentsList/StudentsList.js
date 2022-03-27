import { useSelector } from "react-redux";

const StudentsList = () => {
  const state = useSelector((state) => state.students.value);
  console.log(state);

  return (
    <div className="container mt-5">
      <div className="py-4">
        <h1>List of Students</h1>
        <table className="table border shadow mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {state.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.first__Name + " " + user.last__Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentsList;

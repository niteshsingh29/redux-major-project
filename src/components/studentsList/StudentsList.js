import { useSelector, useDispatch } from "react-redux";
import {deleteStudent} from '../../StateManagement/reducer1'

const StudentsList = () => {
  const state = useSelector((state) => state.students.value);
  const dispatch__delete = useDispatch();
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
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {state.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.first__Name + " " + user.last__Name}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch__delete(deleteStudent({
                        
                        user,

                      }));
                    }}
                  >
                    {" "}
                    Delete This student
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentsList;

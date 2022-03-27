import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state_counter = useSelector((state) => state.students.value)
console.log(state_counter)
let removed = state_counter.slice(-1);
console.log(removed)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style={{boxShadow: '0px 8px 8px -6px #cfc678'}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/Home">
            ProLance IT
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/AddStudents">
                  Add Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/StudentsList">
                  Student List<span className="badge bg-warning text-dark mx-1">{removed[0].id}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/AddMarks">
                  Add Students Marks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">
                  Student Marks Data
                </Link>
              </li>
            </ul>
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link to="/Login"><button className="btn btn-warning AddstudentBtn mx-2 px-4" style= {{boxShadow:'0 0 0 1px #8f8d8d'}} type="submit">Login</button></Link>

        <button className="btn btn-warning AddstudentBtn" style= {{boxShadow:'0 0 0 1px #8f8d8d'}} type="submit">SignUp</button>
      </form>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

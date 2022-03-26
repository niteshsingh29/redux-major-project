
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="/">
            ProLance IT
          </a>
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
                <a className="nav-link text-white" aria-current="page" href="/">
                  Add Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/">
                  Student List
                </a>
              </li>
            </ul>
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-warning AddstudentBtn" style= {{boxShadow:'0 0 0 1px #8f8d8d'}} type="submit">Search</button>
      </form>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/choose" className="nav-link px-2 link-secondary">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/heap/intro" className="nav-link px-2 link-dark">
                  Heap Sort
                </Link>
              </li>
              <li>
                <Link to="/insertion/intro" className="nav-link px-2 link-dark">
                  Insertion Sort
                </Link>
              </li>
              <li>
                <Link to="/merge/intro" className="nav-link px-2 link-dark">
                  Merge Sort
                </Link>
              </li>

              <li>
                <Link to="/selection/intro" className="nav-link px-2 link-dark">
                  Selection Sort
                </Link>
              </li>
              <li>
                <Link to="/bubble/intro" className="nav-link px-2 link-dark">
                  Bubble Sort
                </Link>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
            </form>

            <div className="dropdown text-end">
              <a to="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" to="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

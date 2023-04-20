import Books from "./Books";
import Student from "./Students";
import { NavLink,Route,Routes  } from "react-router-dom";

const Navbar = () => {
  return (
          <div className="ui grid ">
            <div className="computer only row">
              <div className="column">
                <div className="ui menu">
                  <NavLink to="/students" className="item">
                    Students
                  </NavLink>
                  <NavLink to="/" className="item">
                    BOOKS
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Navbar;

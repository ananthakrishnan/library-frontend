import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui grid ">
      <div className="computer only row">
        <div className="column">
          <div className="ui menu">
            <NavLink to="/" className="item">
              BOOKS
            </NavLink>
            <NavLink to="/students" className="item">
              STUDENT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

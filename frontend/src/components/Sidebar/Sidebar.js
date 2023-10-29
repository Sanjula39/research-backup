import React from "react";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import { Nav } from "reactstrap";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

var ps;

function Sidebar(props) {
  const sidebarRef = React.useRef(null);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            <div className="logo">
              <h5 className="simple-text logo-normal">Countries</h5>
            </div>
            <Nav>
              <li>
                <NavLink
                  to={"/dashboard/Textiles/Total"}
                  className="nav-link"
                  // onClick={null}
                >
                  <i className="fa-solid fa-chart-line"></i>
                  <p>Charts</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/Register"}
                  className="nav-link"
                  // onClick={null}
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <p>Register Now !</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/Packaging"}
                  className="nav-link"
                  // onClick={null}
                >
                  <i className="fa-solid fa-box"></i>
                  <p>Packaging</p>
                </NavLink>
              </li>
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Sidebar;

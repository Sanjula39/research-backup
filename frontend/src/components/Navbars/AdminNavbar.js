import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  NavbarToggler,
} from "reactstrap";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  // const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };

  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              <h4>Ceyloneez</h4>
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            className="justify-content-center"
            navbar
            isOpen={collapseOpen}
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div className="notification   d-none d-lg-block d-xl-block" />

                  <p>CATEGORIES</p>
                </DropdownToggle>

                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <Link to="Rubber">
                      <DropdownItem className="nav-item">
                        RUBBER & RUBBER BASED PRODUCTS
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Textiles/Total">
                      <DropdownItem className="nav-item">
                        {" "}
                        APPAREL & TEXTILES
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Jewellery">
                      <DropdownItem className="nav-item">
                        {" "}
                        DIAMONDS, GEMS & JEWELLERY
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Flowers">
                      <DropdownItem className="nav-item">
                        {" "}
                        CUT FLOWERS & FOLIAGE
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Leather">
                      <DropdownItem className="nav-item">
                        {" "}
                        LEATHER PRODUCTS
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Toys">
                      <DropdownItem className="nav-item">
                        {" "}
                        GIFTWARE & TOYS
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Wood">
                      <DropdownItem className="nav-item">
                        {" "}
                        WOOD & WOODEN PRODUCTS
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Ceremics">
                      <DropdownItem className="nav-item">
                        {" "}
                        CERAMICS & PORCELAIN PRODUCTS
                      </DropdownItem>
                    </Link>
                  </NavLink>
                  <NavLink tag="li">
                    <Link to="Ceremics">
                      <DropdownItem className="nav-item">
                        {" "}
                        FOOTWEAR AND PARTS
                      </DropdownItem>
                    </Link>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;

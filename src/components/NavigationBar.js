import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SideBar from "./SideBar";

export default function NavigationBar({ fixed }) {
    const { currentUser } = useAuth();
    return (
        // the navbar shouldn't collapse on small screen or larger
        <Navbar bg="light" expand={false} fixed={fixed}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="/logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    {"   "}
                    <span style={
                        {
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "45px",
                            color: "#000000"
                        }
                    }><span>
                    <font style={{color: "#F59F22"}}>Vo</font><font style={{color: "#80B2D6"}}>Ge</font>
                  </span> Present</span>
                </Navbar.Brand>
                {currentUser && (
                    <div>
                        <Navbar.Text className="justify-content-end px-2 mx-2">
                            Hi, <Link to="/user">{currentUser.email}</Link>!
                        </Navbar.Text>

                        {/* <Navbar.Toggle aria-controls="offcanvasNavbar" /> */}
                        {/* <SideBar /> */}
                    </div>
                )}
            </Container>
        </Navbar>
    );
}

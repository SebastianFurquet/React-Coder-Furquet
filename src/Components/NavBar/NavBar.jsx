import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#Repuestos">Repuestos</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#Carroceria">Carroceria</Nav.Link>
            <Nav.Link href="#Iluminacion">Iluminacion</Nav.Link>
            <Nav.Link href="#Mecanica">Mecanica</Nav.Link>
        </Nav>

    <CartWidget />

        </Container>
    </Navbar>
    </>
);
};

export default NavBar;

import React, {Component} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {ReactComponent as Logo} from "../../img/header/logo.svg";
import {ReactComponent as Telegram}  from '../../img/header/telegram.svg';
import {ReactComponent as Instagram}  from '../../img/header/insta.svg';
import {ReactComponent as Faq}  from '../../img/header/faq.svg';
import {ReactComponent as Cart} from '../../img/header/cart.svg';

// EБТВОЮМАТЬ Я ЛЮБЛЮ ТВОИ ВОЛОСЫ Я ХОЧУ СПАТЬ С ТОБОЙ Я ХОЧУ СТАТЬ ТОБОЙ

export default class Header extends Component {
    render() {

        return (
            <Container>
                <Navbar className="header_menu justify-content-around " collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Brand href="/">
                            <Logo  className="d-inline-block align-top logo" height='117' width='156'></Logo>
                        </Navbar.Brand>
                        <Navbar href="/cart">
                            <Nav.Link href="/cart">
                                <Cart className="d-inline-block align-top cart" height='75' width='88.82'></Cart>
                            </Nav.Link>
                        </Navbar>
                        <Navbar href="/faq">
                            <Nav.Link href="/faqQ">
                                <Faq className="d-inline-block align-top faqQ" height='68' width='68'></Faq>
                            </Nav.Link>
                        </Navbar>
                        <Navbar.Toggle area-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-md-end'>
                            <Nav className="justify-content-md-between">
                                <Navbar href="/telegram" >
                                   <Nav.Link href="https://web.telegram.org/k/#@anncchh">
                                       <Telegram className="d-inline-block align-top telegram" height='74' width='82'></Telegram>
                                   </Nav.Link>
                                </Navbar>
                                    <Nav.Link href="https://www.instagram.com/mamsvyzhi/">
                                        <Navbar href="/instagram">
                                            <Instagram className="d-inline-block align-top instagram" height='68' width='68'></Instagram>
                                        </Navbar>
                                    </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        );
    }
}



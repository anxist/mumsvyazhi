import React, {Component} from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Accardion_quest from "./accardion";
import {ReactComponent as Cart} from "../../img/header/cart.svg";
import Bug from "../../img/faq/Bug.png"
import {ReactComponent as Logo} from "../../img/header/logo.svg";
import {ReactComponent as Telegram}  from '../../img/header/telegram.svg';
import {ReactComponent as Instagram}  from '../../img/header/insta.svg';
import Header from "../Main/header";

class HeaderQuestions extends Component {
    render() {
        return (

            <Container collapseOnSelect expand="md">
                <Header></Header>
                <div className="quest-margin">
                    <p className="text_quest">Частые вопросы</p>
                    <div className="quest_flex">
                        <Col className="bug_wrap">
                            <img
                                src={Bug}
                                height={350}
                                width={380}
                                className={"d-inline-block justify-content-center align-items-center bug"}
                                alt="logo"
                            />
                        </Col>
                        <Col>
                            <Accardion_quest></Accardion_quest>
                        </Col>
                    </div>
                </div>

            </Container>
        );
    }
}

export default HeaderQuestions;
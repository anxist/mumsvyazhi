import React, {Component} from 'react';
import promo_photo from '../../img/main/promo_photo.svg';
import {Container, Nav, Navbar} from "react-bootstrap";
import Game from "../Game/Game.js";
import {ReactComponent as Secret_bttn}  from '../../img/secret_bttn.svg';



class Promo extends Component {
    render() {
        return (
            <Container className="promo">
                <div className="promo_padding myrow" >
                    <div className='bttn_promo mycol'>

                        {/*ДОДЕЛАТЬ ЯКОРНЫЕ ССЫЛКИ*/}
                        <a href="#goods">
                            <button className="bttn">
                                КУПИТЬ
                            </button>
                        </a>
                    </div>
                    <div className='promo_ph'>
                        <img
                            src={promo_photo}
                            height={800}
                            width={703.88}
                            className={"d-inline-block "}
                            alt="logo"
                        />
                        <Navbar href="/bunny">
                            <Nav.Link href="/bunny">
                                <Secret_bttn className="secret_bttn">
                                    <Game>
                                    </Game>
                                </Secret_bttn>
                            </Nav.Link>
                        </Navbar>
                    </div>
                    <div className='bttn_promo mycol'>
                        <a href="#castom">
                            <button className="bttn btn_right">
                                КАСТОМ
                            </button>
                        </a>
                    </div>
                </div>
            </Container>

        );
    }
}

export default Promo;

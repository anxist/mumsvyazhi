import React, {Component} from 'react';
import {Col, Container} from "react-bootstrap";
import ImageUploader from "../ImageUploader";
import footer_img from '../../img/footer/footer_img.png';
import '../../CSS/index.css'

class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer' id='castom'>
                    <Container className="header_cart">
                        <div className='footer_flex'>
                            <Col className='footer_text'>
                                <p className='footer_text_cus'>кастом</p>
                                <p className='footer_text_disc'>
                                    Не нашли в каталоге то, что хотели ? Заполните форму для создания уникальной вещи,
                                    связанной по вашему описанию и фотографиям.
                                </p>
                                <ImageUploader className='carusel_flex'></ImageUploader>
                            </Col>
                            <Col className="footer_img">
                                <img
                                src={footer_img}
                                height={756}
                                width={486}
                                className={"d-inline-block align-center justify-content-end"}
                                alt="logo"
                            />
                            </Col>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Footer;